import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from './API.js';

const BlogJSON = () => {

    const [users, setUsers] = useState([]);
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(API_URL);
                const data = await response.data;
                // console.log(data);
                setUsers(data);
            } catch (err) {
                console.log(err);
            }
        }

        (async () => await getData())();

    }, [])

    return (
        <>

        <section className="blog-section my-5" >
            <div className="blog">
                <div className="container" style={{marginTop:'8rem'}}>
                <h2 className='heading text-center my-5'>BLOG</h2>
                <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return(
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                               </tr>
                            )
                        })
                    }
                </tbody>
            </table>
                </div>
            </div>
        </section>

        <section className="blog-section">
            <div className="blog">
                <h2 className='heading text-center my-5'>BLOG IMAGES</h2>
                <div className="container">
                <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Author</th>
                        <th scope="col">Post</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => {
                            return(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.author}</td>
                                    <td>
                                        <img src={item.post_url} alt='post' width='50%' />
                                    </td>
                               </tr>
                            )
                        })
                    }
                </tbody>
            </table>
                </div>
            </div>
        </section>




        </>
    )
}

export default BlogJSON;