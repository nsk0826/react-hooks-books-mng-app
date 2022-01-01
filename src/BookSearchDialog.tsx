import React, { useState } from "react";
import { BookDescription } from "./BookDescription";
import BookSearchItem from "./BookSearchItem";

type BookSearchDialogProps = {
    maxResults: number;
    onBookAdd: (book: BookDescription) => void;
};

const BookSearchDialog = (props: BookSearchDialogProps) => {
    const [books, setBooks] = useState([] as BookDescription[]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleAuthorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value);
    };

    const handleSearchClick = () => {
        if (!title && !author) {
            alert("条件を入力してください");
            return;
        }
        // 検索実行
    };

    const handleBookAdd = (book: BookDescription) => {
        props.onBookAdd(book);
    }

    const bookItems = books.map((b, idx) => {
        return (
            <BookSearchItem
                description={b}
                onBookAdd={(b) => handleBookAdd(b)}
                key={idx}
            />
        );
    });

    return (
        <div className="dialog">
            <div className="operation">
                <div className="conditions">
                    <input
                        type="text"
                        onChange={handleTitleInputChange}
                        placeholder="タイトルで検索"
                    />
                    <input 
                        type="text"
                        onChange={handleAuthorInputChange}
                        placeholder="著者名で検索"
                    />
                </div>
                <div className="button-like" onClick={handleSearchClick}>
                    検索
                </div>
            </div>
            <div className="search-result">{bookItems}</div>
        </div>
    );
}

export default BookSearchDialog;