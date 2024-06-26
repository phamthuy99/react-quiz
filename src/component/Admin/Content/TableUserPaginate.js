import ReactPaginate from "react-paginate"

const TableUserPaginate = (props) => {
    const {
        listUsers,
        pageCount,
        setCurrentPage,
        currentPage,
        fetListUsersWithPaginate
    } = props
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        fetListUsersWithPaginate(+event.selected + 1)// ép kiểu về number
        setCurrentPage(+event.selected + 1) // mỗi lần chuyển trang cập nhật lại currentPage
    };

    return (
        <>
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>

                                    <td>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => props.handleClickBtnView(item)}>View</button>
                                        <button
                                            className="btn btn-success mx-3"
                                            onClick={() => props.handleClickBtnUpdate(item)}>Update</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => props.handleClickBtnDelete(item)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'5'}>Not found data</td>
                        </tr>}
                </tbody>
            </table>
            <div className="user-table-paginate">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={currentPage - 1} // re-render về page 1
                />
            </div>
        </>
    )
}
export default TableUserPaginate