import React from "react";

export default function CatList({catPics}){

    const catPicList = catPics.map(catPic => <img src={catPic.url} key={catPic.id} alt="cat" />
    )

    return(
        <div>
            {catPicList}
        </div>
    )
}