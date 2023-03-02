import React from "react";
import style from "./MainPage.module.scss";
import Board from "../../Components/Board/Board";

class MainPage extends React.Component<any, {boardList: any}>{
    constructor(props: any) {
        super(props);
        this.state = {
            boardList: [
                {
                    id: 1,
                    title: "Task 1",
                    description: "It's description for task 1",
                    creator: "Yaroslav Ivanitskiy",
                    manager: "Yaroslav Ivanitskiy",
                    status: "active",
                },
                {
                    id: 2,
                    title: "Task 2",
                    description: "It's description for task 2",
                    creator: "Yaroslav Ivanitskiy",
                    manager: "Yaroslav Ivanitskiy",
                    status: "active",
                },
                {
                    id: 3,
                    title: "Task 1",
                    description: "It's description for task 1",
                    creator: "Yaroslav Ivanitskiy",
                    manager: "Yaroslav Ivanitskiy",
                    status: "active",
                },
                {
                    id: 4,
                    title: "Task 2",
                    description: "It's description for task 2",
                    creator: "Yaroslav Ivanitskiy",
                    manager: "Yaroslav Ivanitskiy",
                    status: "active",
                },
                {
                    id: 5,
                    title: "Task 1",
                    description: "It's description for task 1",
                    creator: "Yaroslav Ivanitskiy",
                    manager: "Yaroslav Ivanitskiy",
                    status: "active",
                },
                {
                    id: 6,
                    title: "Task 2",
                    description: "It's description for task 2",
                    creator: "Yaroslav Ivanitskiy",
                    manager: "Yaroslav Ivanitskiy",
                    status: "active",
                },
                {
                    id: 7,
                    title: "Task 1",
                    description: "It's description for task 1",
                    creator: "Yaroslav Ivanitskiy",
                    manager: "Yaroslav Ivanitskiy",
                    status: "active",
                },
                {
                    id: 8,
                    title: "Task 2",
                    description: "It's description for task 2",
                    creator: "Yaroslav Ivanitskiy",
                    manager: "Yaroslav Ivanitskiy",
                    status: "active",
                }
            ]
        }
    }

    render() {
        return (
            <section className={style.homePage}>

                <div className={style.homePage__search}>
                    <h2>Welcome to your Board List</h2>
                    <input
                        type="text"
                        name={"search"}
                        id={"search"}
                        placeholder={"search"}
                    />
                </div>
                <div className={style.boardList}>
                    <ul>
                        {
                            this.state.boardList.map((board: any) => (
                                <Board
                                    id={board.id}
                                    title={board.title}
                                    description={board.description}
                                />
                            ))
                        }
                    </ul>
                </div>
            </section>
        );
    }
}

export default MainPage;