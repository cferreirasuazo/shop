const controllers = require("../controllers")
const articleControllers = require("../controllers/articleController")
const cliente = require("../controllers/clienteController")
const Auth = require("../Auth/AuthController")
const categorias = require("../controllers/categoriasController");
const article = require("../controllers/articleController");
const orderController = require("../controllers/orderController")

const routes = [
    {
        method: "GET",
        url: "/api/articulos",
        handler: controllers.getArticulos
    },
    {
        method: "POST",
        url: "/api/articulos",
        handler: controllers.addArticulo,
    },
    {
        method:"GET",
        url:"/api/articles",
        handler:articleControllers.getArticles
    },
    {
        method:"POST",
        url:"/api/article/delete",
        handler:articleControllers.deleteArticle
    },
    {
        method:"POST",
        url:"/api/login",
        handler:cliente.clienteArticulos
    },
    {
        method:"POST",
        url:"/api/register",
        handler:Auth.register
    },
    {
        method:"POST",
        url:"/api/cliente-update",
        handler:cliente.updateCliente
    },
    {
        method:"GET",
        url:"/api/categorias",
        handler:categorias.getCategorias
    },
    {
        method:"POST",
        url:"/api/add-to-cart",
        handler:cliente.addToClienteArticulo
    },
    {
        method:"GET",
        url:"/api/article/single/:id",
        handler:article.getSingleArticle
    },
    {
        method:"GET",
        url:"/api/article/:id",
        handler:article.getArticleById
    },
    {
        method: "POST",
        url:"/api/order/add",
        handler: orderController.addOrden
    }



]


module.exports = routes