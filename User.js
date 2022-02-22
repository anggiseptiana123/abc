import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

const User = () => {
    return(
        <div>
     <Topbar/>
     <div className="row">
     <Sidebar/>
        <div className="col-10">
            <div className="row p-3">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Form User</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="nama">Nama</label>
                                <input type="text" className="form-control" name="nama" placeholder="input name"></input>
                            </div>
                            <div className="form-group">
                                <label className="text-left" htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" placeholder="input email"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="input password"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nama">Role</label>
                                <select name="role" className="form-control" id="role">
                                    <option>Silahkan Pilih</option>
                                    <option value="admin">Admin</option>
                                    <option value="kasir">Kasir</option>
                                </select>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" type="submit">Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        <div className="col-md-5">
            <div className="row">
                <div className="table-responsive">
                    <table className="table table-hover mt-2">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Nama</td>
                                <td>Email</td>
                                <td>Role</td>
                                
                                <td>Option</td>
                                <td>Option</td>
                            </tr>
                        </thead>       
                 </table>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>
    )
}
export default User;