
export default function SearchBar() {
    return (
        <div className="searchbar-container">
            <div className="container">
                <div className="row">
                    <div className="logo-container col-3">
                        <img src="image/logo1.png" alt="" />
                    </div>

                    <div className="col-4">
                        <div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-warning">search</button>
                        </div>
                    </div>

                    <div className="col-2">

                    </div>
                    <div className="col-3 signin-container">

                        <div className="signin">
                            <i class="bi bi-person"></i>
                            <span className="space"> </span>
                            Sign in
                        </div>
                        <div className="favorite">
                            <i class="bi bi-suit-heart"></i>
                        </div>
                        <div className="basket">
                            <i class="bi bi-cart"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}