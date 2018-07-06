import React from 'react';
import classes from './Admin.css';
import axios from "../../axios-blog";

export default class admin extends React.Component {

  state = {
    products: null,
    categories: null,
    categoria: {
      name: '',
      description: ''
    },
    producto: {
      name: '',
      price: '',
      category: '',
      stock: '',
      description: ''
    },
  
  }

  componentDidMount () {

    this.cargarData()
  
  }
 
cargarData = () => {
  this.setState({
    categoria: {
      name: '',
      description: ''
    },
    producto:{
      name: '',
      price: '',
      category: '',
      stock: '',
      description: ''
    },
    usuario: {
      name: '',
      email: '',
      contraseña: ''
    }
  })
  axios.get("/products",{
    'Content-Type': 'application/json'
  })
  .then(response => {
    console.log(response.data)
    this.setState({
      products: response.data.products
    })
  })
  .catch(err => {
    console.log(err)
  })

  axios.get("/categories",{
    'Content-Type': 'application/json'
  })
  .then(response => {
    console.log(response.data)
    this.setState({
      categories: response.data.categories
    })
  })
  .catch(err => {
    console.log(err)
  })
}



  cambiarInputCategoria = (event,campo) => {
    this.setState({
      categoria: {
        ...this.state.categoria,
        [campo]: event.target.value
      }
    });
  }

  crearCategoria = (event) => {
    event.preventDefault();
    const data = this.state.categoria;
    console.log('data de categoria',data)
    axios.post("/category",data)
    .then(response => {
      console.log('refresca',response.data)
      //
     this.cargarData()
    })
    .catch(err => {
      console.log(err)
    })
  }

  cambiarInputProducto = (event,campo) => {
    this.setState({
      producto: {
        ...this.state.producto,
        [campo]: event.target.value
      }
    });
  }

  crearProducto = (event) => {
    event.preventDefault();
    const data = this.state.producto;
    console.log('data de producto',data)
    axios.post("/product",data)
    .then(response => {
      console.log('refresca',response.data)
      //
     this.cargarData()
    })
    .catch(err => {
      console.log(err)
    })
  }




  render(){
    if (this.state.products == null) {
      return (<div>
        Cargando...
      </div>)
    }


    return (<div>
 
      <div className={classes.form_style_3}>
        <form className={classes.usuarioss} onSubmit={this.crearUsuario}>
          <fieldset><legend>Usuarios</legend>
            <label ><span>Nombre <span></span></span>
              <input type="text"    />
            </label>
            <label ><span>Email <span></span></span>
              <input type="email"   />
            </label>
            <label ><span>Contraseña <span></span></span>
              <input type="text"   />
            </label>
            <label ><span>Permisos</span>
              <select >
                <option value="Appointment">Admin</option>
                <option value="Interview">Usuario normal</option>
              </select>
            </label>
            <label><span>&nbsp;</span>
              <input type="submit" value="Crear" />
            </label>
          </fieldset>
        </form>
        <form className={classes.categoriass} onSubmit={this.crearCategoria}>
          <fieldset><legend>Categoria</legend>
          <label ><span>Nombre <span></span></span>
            <input type="text"
              value={this.state.categoria.name}
              onChange={(event) => this.cambiarInputCategoria(event,'name')} />
          </label>
          <label><span>Descripcion<span className={classes.required}></span></span>
            <input type="text"  
              value={this.state.categoria.description}
              onChange={(event) => this.cambiarInputCategoria(event,'description')} />
          </label>
      
          <label><span>&nbsp;</span><input type="submit" value="Crear" /></label>
          </fieldset>
        </form>
        <form className={classes.productoss} onSubmit={this.crearProducto}>
          <fieldset><legend>Producto</legend>
            <label><span>Nombre <span className={classes.required}></span></span>
              <input type="text"  
                value={this.state.producto.name}
                onChange={(event) => this.cambiarInputProducto(event,'name')} />
            </label>

            <label><span>Precio <span className={classes.required}></span></span>
              <input type="text"  
                value={this.state.producto.price}
                onChange={(event) => this.cambiarInputProducto(event,'price')} />
            </label>

            <label><span>Categorias</span>
              <select 
                value={this.state.producto.category} 
                onChange={(event) => this.cambiarInputProducto(event,'category' )}>
                {(this.state.categories!==null)?this.state.categories.map(item => (
                <option value={item._id}>{item.name}</option>)):null}
      
              </select>
            </label>

            <label><span>Cantidad <span className={classes.required}></span></span>
              <input type="text"   
              value={this.state.producto.stock}
              onChange={(event) => this.cambiarInputProducto(event,'stock')} />
            </label>

            <label><span>Descripción <span className={classes.required}></span></span>
              <input type="text"  name="field2" 
                value={this.state.producto.description}
                onChange={(event) => this.cambiarInputProducto(event,'description')} />
            </label>

            <label className={classes.imgs}><span>Imagen <span className={classes.required}></span></span>
              <input type="file" name="pic" accept="image/"/>
            </label>
            <label><span>&nbsp;</span><input type="submit" value="Crear" /></label>
      
          </fieldset>
        </form>
      </div>
      
      <div className={classes.listUsuario} >
      <h1>Usuarios</h1>
      <form>
      <table>
        <tr>
          
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Contraseña</th>
          <th>Contraseña</th>
          <th>Permisos</th>
        </tr>
        <tr>
          <th>1</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><input type="button" 
              value="Eliminar"
              /></td>
          <td><button>Editar</button></td>
        </tr>
       
      
      </table></form>
      
      </div>
      <h1>Productos</h1>
      <div className={classes.listProducto}>
      <form>
      <table>
      
        <tr>
          
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoria</th>
          <th>Cantidad</th>
          <th>Imagen</th>
          <th>Descripción</th>
        </tr>
        {
          this.state.products.map((item, index) => {
            return(<tr key={index}>
              
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category?item.category.name:null}</td>
              <td>{item.stock}</td>
              <td>{item.image}</td>
              <td>{item.description}</td>
              <td><input type="button" 
              value="Eliminar"
              
              /></td>
              <td><button>Editar</button></td>
            </tr>)
          })
        }

        
       
      </table>      
      </form>
      </div>
      <h1>Categorias</h1>
      <div className={classes.listCategoria}>
      <form>
      <table>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
        {(this.state.categories!==null)?this.state.categories.map((items, indexx) => {
          return (<tr key={indexx}>
          
         <td>{items._id}</td>
         <td>{items.name}</td>
         <td>{items.description}</td>
         <td><input type="button" 
              value="Eliminar"
              /></td>
         <td><button>Editar</button></td>
       </tr>) }):null
    }
       
       
      </table>
      
      </form>
      </div>
        
          </div>);
  }

}

