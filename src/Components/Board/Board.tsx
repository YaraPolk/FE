import React from "react";
import style from "./Board.module.scss";

class Board extends React.Component<any, any> {

    render() {
        return (
            <li key={this.props.id} className={"board"}>
                <div className={style.board__date}>
                    <h3>{this.props.title}</h3>
                    <p className={"description"}>{this.props.description}</p>
                </div>
                <div className={style.board__control}>
                    <button title={"Done"} id={style.done}>&#10004;</button>
                    <button title={"Delete"} id={style.delete}>&#10006;</button>
                </div>
            </li>
        );
    }
}

export default Board;