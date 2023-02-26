import React from "react";
import {Author} from "../../models/types";


export const Tweet: React.FC<Author> = (author) => {
    return (
        <div className="tweet">
            <div className="user">
                <img src={author.avatarUrl} alt={author.name} className="avatar"/>
            </div>
        </div>
    )

}