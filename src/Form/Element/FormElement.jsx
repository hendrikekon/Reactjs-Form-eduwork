import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidationMessages from './ValidationMessage';

class FormElement extends React.Component {
    state = {
        nama: '',
        email: '',
        password: '',
        jurusan: '',
        gender: '',
        alamat: '',
        remember: false,
        errors: []
    };

    validate = () => {
        const errors = [];
        if (this.state.nama.length === 0) {
            errors.push('Nama Tidak Boleh Kosong');
        }
        if (this.state.email.length === 0) {
            errors.push('Email Tidak Boleh Kosong');
        }
        //const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
        if(!re.test(String(this.state.email).toLowerCase())){
            errors.push('Format Email Tidak Valid');
        }
        if (this.state.password.length === 0) {
            errors.push('Password Tidak Boleh Kosong');
        }else if (this.state.password.length < 8){
            errors.push('Password minimal 8 karakter');
        }
        if (this.state.jurusan.length === 0) {
            errors.push('Pilih salah satu jurusan');
        }
        if (this.state.gender.length === 0) {
            errors.push('Jenis Kelamin belum dipilih');
        }
        if (this.state.alamat.length === 0) {
            errors.push('Alamat Tidak Boleh Kosong');
        }
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        if (errors.length > 0) {
            this.setState({ errors });
        } else {
            alert(`
                Nama: ${this.state.nama},
                Email: ${this.state.email},
                Password: ${this.state.password},
                Jurusan: ${this.state.jurusan},
                Gender: ${this.state.gender},
                Alamat: ${this.state.alamat},
                Remember Me: ${this.state.remember ? 'Yes' : 'No'}
            `);
            this.setState({
                nama: '',
                email: '',
                password: '',
                jurusan: '',
                gender: '',
                alamat: '',
                remember: false,
                errors: []
            })
        }
    }



    render() {
        return (
            <div className='container mt-5'>
                <h2>Form Registrasi</h2>
                <form onSubmit={this.handleSubmit}>
                    <ValidationMessages errors={this.state.errors} />
                    <div className='form-group mb-3'>
                        <label>
                            Nama:
                        </label>
                        <input
                         type='text'
                          name='nama'
                           className='form-control'
                            onChange={ e => this.setState({nama: e.target.value})}
                             value={this.state.nama}/>
                    </div>

                    <div className='formg-roup row mb-3'>
                        <div className='form-group col-md-6'>
                            <label>
                                Email:
                            </label>
                            <input
                             type='email'
                              name='email'
                               className='form-control'
                                onChange={ e => this.setState({email: e.target.value})}
                                 value={this.state.email}/>
                        </div>

                        <div className='form-group col-md-6'>
                            <label>
                                Password:
                            </label>
                            <input
                             type='password'
                              name='password'
                               className='form-control'
                                onChange={ e => this.setState({password: e.target.value})}
                                 value={this.state.password}/>
                        </div>
                    </div>

                    <div className='form-group mb-3'>
                        <label>
                            Jurusan:
                        </label>
                        <select
                         className="form-control"
                          name='jurusan'
                           onChange={ e => this.setState({jurusan: e.target.value})}
                            value={this.state.jurusan}>
                            <option value=''>Pilih Jurusan</option>
                            <option value='Teknik Informatika'>Teknik Informatika</option>
                            <option value='Sistem Informasi'>Sistem Informasi</option>
                            <option value='Manajemen Informasi'>Manajemen Informasi</option>
                        </select>
                    </div>
                    
                    <div className='form-group mb-3'>
                        <label>
                            Jenis Kelamin:&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <div className='form-check form-check-inline'>
                            <input className='form-check-input' type='radio' name='gender' value='Laki laki'
                             onChange={ e => this.setState({gender: e.target.value})}
                              checked={this.state.gender === 'Laki laki'} />
                            <label className='form-check-label' >Laki laki</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input className='form-check-input' type='radio' name='gender' value='Perempuan'
                             onChange={ e => this.setState({gender: e.target.value})}
                              checked={this.state.gender === 'Perempuan'}/>
                            <label className='form-check-label' >Perempuan</label>
                        </div>
                    </div>

                    <div className='form-group mb-3'>
                        <label>
                            Alamat:
                        </label>
                        <textarea name='alamat' rows='5' cols='30' className='form-control'
                         onChange={ e => this.setState({alamat: e.target.value})}
                          value={this.state.alamat}></textarea>
                    </div>

                    <div className="form-group mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name='remember'
                             checked={this.state.remember}
                              onChange={ e => this.setState({remember: e.target.checked})}/>
                            <label className="form-check-label">
                                Remember Me
                            </label>
                        </div>
                    </div>

                    <input type='submit' value='Submit' className='btn btn-primary mb-2'/>
                </form>
            </div>
        );
    }
}

export default FormElement;