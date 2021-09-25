function MainTable(){
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Coordinates</th>
                    <th scope="col">Creation Date</th>
                    <th scope="col">Price</th>
                    <th scope="col">Comment</th>
                    <th scope="col">Type</th>
                    <th scope="col">Event</th>
                </tr>
            </thead>
        </table>
    )
}

export default MainTable;