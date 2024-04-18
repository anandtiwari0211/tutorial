import React, { Component } from "react";

class Listing extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { name: 'raj', email: 'r@gmail.com', phone: 9987752145 },
                { name: 'vikas', email: 'v@gmail.com', phone: 8529631470 },
                { name: 'vicky', email: 'vik@gmail.com', phone: 857496321 },
                { name: 'vinod', email: 'vin@gmail.com', phone: 7418529630 },
                { name: 'rahul', email: 'r@gmail.com', phone: 8529631470 }
            ]
        }

    }

    render() {
        return (
            <>
                <div>
                    <h1>Listing Component</h1>
                    {
                        this.state.list.map((item) =>
                            <div>
                                <span>Name: {item.name} Email : {item.email} Phone : {item.phone}</span>

                            </div>
                        )
                    }
                </div>
            </>
        )
    }
}

export default Listing;