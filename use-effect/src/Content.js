import { position } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [types, setTypes] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${types}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [types])

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        //Clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {
                tabs.map(tab => (
                    <button
                        onClick={() => setTypes(tab)}
                        style={types === tab ? {
                            color: '#fff',
                            backgroundColor: '#333'
                        } : {}}
                        key={tab}
                    >
                        {tab}
                    </button>
                ))
            }

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {
                showGoToTop && (
                    <button style={
                        {
                            position: 'fixed',
                            right: 20,
                            bottom: 20
                        }}
                        onClick={handleGoToTop}
                    >
                        GO TO TOP
                    </button>
                )
            }
        </div>
    );
}

export default Content;
