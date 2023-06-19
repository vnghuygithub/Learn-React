import { useState, useEffect } from "react";

const tabs = ['photos', 'todos', 'users']

function Content() {
    const [posts, setPosts] = useState([])
    const [types, setTypes] = useState('photos')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${types}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [types])

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
                    > {tab}</button>
                ))
            }
            <ul>
                {posts.map(post => (

                    <li key={post.id}>{post.title || post.name}</li>
                )
                )}
            </ul>
        </div>
    );
}

export default Content;
