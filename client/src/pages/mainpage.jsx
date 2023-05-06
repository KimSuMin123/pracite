import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../src/mainpage.css'

const Mainpage = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fecthAllBooks = async () => {
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fecthAllBooks()
    },{})

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/books/" + id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }
    return(
        <div>
            <h1>sumin book shop</h1>
            <table>
                <tr>
                    <th>제목</th>
                    <th>예제</th>
                    <th>커버</th>
                </tr>
            </table>
            <div className="books">
                {books.map(book => (
                    <div className="book" key = {book.id}>
                        <table>
                            <tr>
                                <td>{book.title}</td>
                                <td>{book.desc}</td>
                                <td>{book.cover}</td>
                                <td><button className="delete" onClick={() => handleDelete(book.id)}>Delete</button></td>
                                <td><button className="update"><Link to = {`update/${book.id}`}>Update</Link></button></td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>
            <button><Link to = "/add">Add new book</Link></button>
        </div>
    )
}

export default Mainpage;