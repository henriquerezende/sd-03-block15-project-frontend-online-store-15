(this["webpackJsonpfrontend-online-store"]=this["webpackJsonpfrontend-online-store"]||[]).push([[0],{31:function(e,t,a){e.exports=a(48)},36:function(e,t,a){},37:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),i=a.n(c),o=(a(36),a(1)),l=a(2),s=a(6),u=a(4),m=a(3),d=a(15),p=a(7),h=(a(37),a(9)),b=a.n(h),f=a(16);function v(){return(v=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.mercadolibre.com/sites/MLB/categories").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(f.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(f.a)(b.a.mark((function e(t,a,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a,"&sort=").concat(n)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleClick,a=e.searchText,n=e.onSearchTextChange;return r.a.createElement("form",{className:"form-inline form-control-lg w-50"},r.a.createElement("input",{id:"search-input",className:"form-control my-5 mx-3 my-sm-0 w-75",type:"search",placeholder:"Procurar","aria-label":"Search","data-testid":"query-input",value:a,onChange:n}),r.a.createElement("button",{className:"btn btn-danger my-2 my-sm-0",type:"button","data-testid":"query-button",onClick:t()},"Procurar"))}}]),a}(n.Component),C=a(18);function O(e,t,a,n){var r=JSON.parse(localStorage.getItem("cartItems")),c=r.findIndex((function(e){return e.id===a}));-1!==c?r[c].quantity<n&&(r[c].quantity+=1,localStorage.setItem("cartItems",JSON.stringify(r))):localStorage.setItem("cartItems",JSON.stringify([].concat(Object(C.a)(r),[{title:e,id:a,price:t,quantity:1,availableQuantity:n}])))}var j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addCartInput=n.addCartInput.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"addCartInput",value:function(){var e=this.props,t=e.product,a=t.title,n=t.price,c=t.id,i=t.available_quantity,o=e.updateCartSize;return r.a.createElement("input",{"data-testid":"product-add-to-cart",className:"btn btn-link",value:"Adicionar ao Carrinho",type:"button",onClick:function(){O(a,n,c,i),o()}})}},{key:"render",value:function(){var e=this.props.product,t=e.title,a=e.price,n=e.thumbnail,c=e.id,i=e.shipping,o=this.props.product.available_quantity;return r.a.createElement("div",{className:"col mb-3","data-testid":"product"},r.a.createElement("div",{className:"card text-center",style:{width:"18rem"}},r.a.createElement("img",{src:n,alt:"".concat(t," thumbnail"),className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),i.free_shipping?r.a.createElement("p",{className:"bg-danger text-white","data-testid":"free-shipping"},"Frete gr\xe1tis"):null,r.a.createElement("p",{className:"card-text"},"R$".concat(a)),r.a.createElement(d.b,{to:{pathname:"/product/".concat(c),state:{title:t,thumbnail:n,price:a,shipping:i,availableQuantity:o,id:c}},className:"btn btn-link","data-testid":"product-detail-link"},"Detalhes"),this.addCartInput())))}}]),a}(n.Component),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.products,a=e.updateCartSize;return t.results?0===t.results.length?r.a.createElement("p",null,"Nenhum Produto foi encontrado"):r.a.createElement("div",{className:"row row-cols-1 row-cols-md-2"},t.results.map((function(e){return r.a.createElement(j,{product:e,key:e.id,updateCartSize:a})}))):r.a.createElement("p",{"data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria.")}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onCategoryClick;return e.categories.map((function(e){var a=e.id,n=e.name;return r.a.createElement("div",{key:a},r.a.createElement("input",{className:"btn btn-link","data-testid":"category",type:"button",id:a,value:n,name:"categories",onClick:t}))}))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark justify-content-center"},e)}}]),a}(n.Component),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),localStorage.getItem("cartItems")||localStorage.setItem("cartItems","[]"),n.state={categories:[],selectedCategory:"",searchText:"",products:[]},n.searchProducts=n.searchProducts.bind(Object(s.a)(n)),n.searchProductsSorted=n.searchProductsSorted.bind(Object(s.a)(n)),n.sortButtons=n.sortButtons.bind(Object(s.a)(n)),n.categorySelector=n.categorySelector.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){return v.apply(this,arguments)})().then((function(t){e.setState({categories:t})}))}},{key:"searchProducts",value:function(){var e=this,t=this.state,a=t.searchText;(function(e,t){return y.apply(this,arguments)})(t.selectedCategory,a).then((function(t){return e.setState({products:t})}))}},{key:"searchProductsSorted",value:function(e){var t=this,a=this.state.products,n=a.query,r=a.filters,c=n,i="";r[0]&&(i=r[0].values[0].id),n||(c=""),function(e,t,a){return E.apply(this,arguments)}(i,c,e).then((function(e){return t.setState({products:e})}))}},{key:"sortButtons",value:function(){var e=this;return r.a.createElement("form",{className:"form-control-lg"},r.a.createElement("button",{type:"button",className:"btn btn-danger mx-2 my-2 my-sm-0",onClick:function(){return e.searchProductsSorted("price_asc")}},"Menor Pre\xe7o"),r.a.createElement("button",{type:"button",className:"btn btn-danger mx-2 my-2 my-sm-0",onClick:function(){return e.searchProductsSorted("price_desc")}},"Maior Pre\xe7o"))}},{key:"categorySelector",value:function(){var e=this,t=this.state,a=t.categories,n=t.selectedCategory;return r.a.createElement(N,{categories:a,selectedCategory:n,onCategoryClick:function(){var t=Object(f.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedCategory:a.target.id});case 2:e.searchProducts();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchText,n=t.products,c=this.props.updateCartSize;return r.a.createElement("div",null,r.a.createElement(k,null,r.a.createElement(g,{handleClick:function(){return e.searchProducts},searchText:a,onSearchTextChange:function(t){return e.setState({searchText:t.target.value})}}),r.a.createElement("h5",{className:"text-white"},"Ordenar"),this.sortButtons()),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},this.categorySelector()),r.a.createElement("div",{className:"col"},r.a.createElement(S,{products:n,updateCartSize:c})))))}}]),a}(n.Component),P=a(13),x=a(14),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deleteButton=n.deleteButton.bind(Object(s.a)(n)),n.quantityCrud=n.quantityCrud.bind(Object(s.a)(n)),n.increaseButton=n.increaseButton.bind(Object(s.a)(n)),n.decreaseButton=n.decreaseButton.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"deleteButton",value:function(){var e=this.props,t=e.updateCartItems,a=e.updateCartSize,n=e.item.id;return r.a.createElement("th",{scope:"row"},r.a.createElement("button",{type:"button",onClick:function(){!function(e){var t=JSON.parse(localStorage.getItem("cartItems")),a=t.findIndex((function(t){return t.id===e}));-1!==a&&(t.splice(a,1),localStorage.setItem("cartItems",JSON.stringify(t)))}(n),t(),a()},className:"btn text-danger"},r.a.createElement(P.a,{icon:x.e})))}},{key:"decreaseButton",value:function(){var e=this.props,t=e.item.id,a=e.updateCartItems,n=e.updateCartSize;return r.a.createElement("button",{"data-testid":"product-decrease-quantity",type:"button",onClick:function(){!function(e){var t=JSON.parse(localStorage.getItem("cartItems")),a=t.findIndex((function(t){return t.id===e}));-1!==a&&t[a].quantity>1&&(t[a].quantity-=1,localStorage.setItem("cartItems",JSON.stringify(t)))}(t),a(),n()},className:"btn btn-link"},r.a.createElement(P.a,{icon:x.b}))}},{key:"increaseButton",value:function(){var e=this.props,t=e.item,a=t.title,n=t.price,c=t.id,i=t.availableQuantity,o=e.updateCartItems,l=e.updateCartSize;return r.a.createElement("button",{"data-testid":"product-increase-quantity",type:"button",onClick:function(){O(a,n,c,i),o(),l()},className:"btn btn-link"},r.a.createElement(P.a,{icon:x.c}))}},{key:"quantityCrud",value:function(){var e=this.props.item.quantity;return r.a.createElement("td",{"data-testid":"shopping-cart-product-quantity"},this.increaseButton(),r.a.createElement("span",null,e),this.decreaseButton())}},{key:"render",value:function(){var e=this.props.item,t=e.title,a=e.price;return r.a.createElement("tr",null,this.deleteButton(),r.a.createElement("td",{"data-testid":"shopping-cart-product-name"},t),r.a.createElement("td",null,"R$ ",a),this.quantityCrud())}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=JSON.parse(localStorage.getItem("cartItems"));return n.state={cartItems:r,totalCartPrice:0},n.updateCartItems=n.updateCartItems.bind(Object(s.a)(n)),n.cartTable=n.cartTable.bind(Object(s.a)(n)),n.cartTableBody=n.cartTableBody.bind(Object(s.a)(n)),n.totalCartPrice=n.totalCartPrice.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.totalCartPrice()}},{key:"updateCartItems",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("cartItems")),e.next=3,this.setState((function(){return{cartItems:t}}));case 3:this.totalCartPrice();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cartTableBody",value:function(){var e=this,t=this.props.updateCartSize,a=this.state.cartItems;return r.a.createElement("tbody",null,a.map((function(a,n){return r.a.createElement(q,{key:a.id,item:a,index:n,updateCartItems:e.updateCartItems,updateCartSize:t})})))}},{key:"totalCartPrice",value:function(){var e=this.state.cartItems.reduce((function(e,t){return t.quantity*t.price+e}),0).toFixed(2);this.setState((function(){return{totalCartPrice:e}}))}},{key:"cartTable",value:function(){return 0===this.state.cartItems.length?r.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"):r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Nome"),r.a.createElement("th",{scope:"col"},"Pre\xe7o"),r.a.createElement("th",{scope:"col"},"Quantidade"))),this.cartTableBody())}},{key:"render",value:function(){var e=this.state.totalCartPrice;return r.a.createElement("div",null,this.cartTable(),r.a.createElement("span",null,"Pre\xe7o total: R$ ".concat(e)))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.updateCartSize;return r.a.createElement("div",null,r.a.createElement(d.b,{to:"/"},"Voltar"),r.a.createElement(z,{updateCartSize:e}),r.a.createElement(d.b,{"data-testid":"checkout-products",to:"/checkout"},"Finalizar Compra"))}}]),a}(n.Component),T=a(30),B=a(20),R=a.n(B),M=(a(47),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.ratingList;return 0!==e.length?r.a.createElement("div",null,e.map((function(e){var t=e.rate,a=e.comment,n=e.email,c=e.ratingId;return r.a.createElement("div",{key:c,className:"jumbotron jumbotron-fluid bg-transparent"},r.a.createElement("h1",{className:"display-4"},a),r.a.createElement(R.a,{total:5,rating:t,interactive:!1}),r.a.createElement("p",{className:"lead"},n))}))):null}}]),a}(n.Component)),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=e.productId;localStorage.getItem(r)||localStorage.setItem(r,"[]");var c=JSON.parse(localStorage.getItem(r)),i=0;return c[c.length-1]&&(i=c[c.length-1].id),n.state={ratingList:c,rate:0,email:"",comment:"",id:i},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleRating=n.handleRating.bind(Object(s.a)(n)),n.addRating=n.addRating.bind(Object(s.a)(n)),n.commentTextArea=n.commentTextArea.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){var t=e.id,a=e.value;this.setState(Object(T.a)({},t,a))}},{key:"handleRating",value:function(e){this.setState({rate:e})}},{key:"addRating",value:function(){var e=this.state,t=e.rate,a=e.ratingList,n=e.comment,r=e.email,c=e.id,i=this.props.productId,o=c+1;this.setState({ratingList:[].concat(Object(C.a)(a),[{rate:t,comment:n,email:r,ratingId:o}]),id:o}),localStorage.setItem(i,JSON.stringify([].concat(Object(C.a)(a),[{rate:t,comment:n,email:r,ratingId:o}])))}},{key:"commentTextArea",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("textarea",{className:"form-control","data-testid":"product-detail-evaluation",name:"comment",id:"comment",cols:"60",rows:"5",placeholder:"Mensagem(opcional)",onChange:function(t){return e.handleChange(t.target)}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.ratingList,n=t.rate;return r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("div",{className:"row-cols-2"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h5",null,"Avalia\xe7\xf5es"),r.a.createElement("input",{type:"text",id:"email",name:"email",className:"form-control",placeholder:"email",onChange:function(t){return e.handleChange(t.target)}}),r.a.createElement(R.a,{total:5,rating:n,onRate:function(t){var a=t.rating;return e.handleRating(a)}}),this.commentTextArea(),r.a.createElement("button",{type:"submit",onClick:this.addRating,className:"btn btn-link"},"Avaliar")))),r.a.createElement(M,{ratingList:a}))}}]),a}(r.a.Component),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=JSON.parse(localStorage.getItem("cartItems")),c=e.product.id,i=r.findIndex((function(e){return e.id===c})),l=1;return-1!==i&&(l=r[i].quantity),n.state={quantity:l},n.addProductToCart=n.addProductToCart.bind(Object(s.a)(n)),n.subProductToCart=n.subProductToCart.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"addProductToCart",value:function(){var e=this.state.quantity;e<this.props.product.availableQuantity&&this.setState({quantity:e+1})}},{key:"subProductToCart",value:function(){var e=this.state.quantity;e>1&&this.setState({quantity:e-1})}},{key:"render",value:function(){var e=this.state.quantity,t=this.props,a=t.product,n=a.id,c=a.price,i=a.title,o=a.availableQuantity,l=t.updateCartSize;return r.a.createElement("div",null,r.a.createElement("h5",null,"Quantidade"),r.a.createElement("button",{type:"button",onClick:this.addProductToCart,className:"btn btn-link"},r.a.createElement(P.a,{icon:x.c})),r.a.createElement("span",null,e),r.a.createElement("button",{type:"button",onClick:this.subProductToCart,className:"btn btn-link"},r.a.createElement(P.a,{icon:x.b})),r.a.createElement("input",{"data-testid":"product-detail-add-to-cart",type:"button",value:"Adicionar ao Carrinho",className:"btn btn-link",onClick:function(){!function(e,t,a,n,r){var c=JSON.parse(localStorage.getItem("cartItems")),i=c.findIndex((function(e){return e.id===a}));-1!==i?(c[i]={quantity:n,title:e,price:t,id:a,availableQuantity:r},localStorage.setItem("cartItems",JSON.stringify(c))):localStorage.setItem("cartItems",JSON.stringify([].concat(Object(C.a)(c),[{title:e,id:a,price:t,quantity:n,availableQuantity:r}])))}(i,c,n,e,o),l()}}))}}]),a}(n.Component),Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).productCard=n.productCard.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"productCard",value:function(){var e=this.props.location.state,t=e.price,a=e.thumbnail,n=e.title,c=e.shipping;return r.a.createElement("div",{className:"card mb-3",style:{maxWidth:"540px"}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:a,className:"card-img",alt:"..."})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title","data-testid":"product-detail-name"},"".concat(n," - R$").concat(t)),c.shipping?r.a.createElement("p",{className:"bg-danger text-white","data-testid":"free-shipping"},"Frete gr\xe1tis"):null,r.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")))))}},{key:"render",value:function(){var e=this.props.location.state,t=e.price,a=e.title,n=e.availableQuantity,c=this.props,i=c.match.params.id,o=c.updateCartSize;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},this.productCard(),r.a.createElement(J,{product:{id:i,price:t,title:a,availableQuantity:n},updateCartSize:o}),r.a.createElement(A,{productId:i})))}}]),a}(n.Component),F=[{name:"Boleto",type:"barcode"},{name:"MasterCard",type:"creditCard"},{name:"Visa",type:"creditCard"},{name:"Elo",type:"creditCard"}],L=[{name:"Acre",initials:"AC"},{name:"Alagoas",initials:"AL"},{name:"Amap\xe1",initials:"AP"},{name:"Amazonas",initials:"AM"},{name:"Bahia",initials:"BA"},{name:"Cear\xe1",initials:"CE"},{name:"Distrito Federal",initials:"DF"},{name:"Esp\xedrito Santo",initials:"ES"},{name:"Goi\xe1s",initials:"GO"},{name:"Maranh\xe3o",initials:"MA"},{name:"Mato Grosso",initials:"MT"},{name:"Mato Grosso do Sul",initials:"MS"},{name:"Minas Gerais",initials:"MG"},{name:"Par\xe1",initials:"PA"},{name:"Para\xedba",initials:"PB"},{name:"Paran\xe1",initials:"PR"},{name:"Pernambuco",initials:"PE"},{name:"Piau\xed",initials:"PI"},{name:"Rio de Janeiro",initials:"RJ"},{name:"Rio Grande do Norte",initials:"RN"},{name:"Rio Grande do Sul",initials:"RS"},{name:"Rond\xf4nia",initials:"RO"},{name:"Roraima",initials:"RR"},{name:"Santa Catarina",initials:"SC"},{name:"S\xe3o Paulo",initials:"SP"},{name:"Sergipe",initials:"SE"},{name:"Tocantins",initials:"TO"}],G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("h4",null,"Informa\xe7\xf5es do Comprador"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{"data-testid":"checkout-fullname",type:"text",className:"form-control",id:"inputFullName",placeholder:"Nome Completo",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{"data-testid":"checkout-cpf",type:"text",className:"form-control",id:"inputCPF",placeholder:"CPF",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{"data-testid":"checkout-email",type:"email",className:"form-control",id:"inputEmail",placeholder:"Email",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{"data-testid":"checkout-phone",type:"text",className:"form-control",id:"inputPhoneNumber",placeholder:"Telefone",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{"data-testid":"checkout-cep",type:"text",className:"form-control",id:"inputCEP",placeholder:"CEP",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{"data-testid":"checkout-address",type:"text",className:"form-control",id:"inputAddress",placeholder:"Endere\xe7o",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"inputComplement",placeholder:"Complemento",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",className:"form-control",id:"inputAddressNumber",placeholder:"N\xfamero",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"inputCity",placeholder:"Cidade",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",id:"inputBrazilStates",placeholder:"Estado"},L.map((function(e){var t=e.initials;return r.a.createElement("option",{key:t,value:t},t)}))))))}}]),a}(n.Component),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"radio",className:"form-check-input",id:"paymentMethod",name:"paymentMethod"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"materialInline1"},e))}}]),a}(n.Component),$=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("h4",null,"M\xe9todo de Pagamento"),r.a.createElement("div",{className:"row"},F.map((function(e){var t=e.name;return r.a.createElement(D,{key:t},t,r.a.createElement(P.a,{icon:x.a}))}))))}}]),a}(n.Component),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.updateCartSize;return r.a.createElement("div",null,r.a.createElement(z,{updateCartSize:e}),r.a.createElement(G,null),r.a.createElement($,null),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Comprar"))}}]),a}(n.Component),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.cartSize;return r.a.createElement(d.b,{to:"/shoppingCart","data-testid":"shopping-cart-button"},r.a.createElement("span",{"data-testid":"shopping-cart-size",className:"cart-size"},e),r.a.createElement(P.a,{icon:x.d,className:"cart-icon"}))}}]),a}(n.Component),V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={cartSize:0},n.updateCartSize=n.updateCartSize.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateCartSize()}},{key:"updateCartSize",value:function(){var e=JSON.parse(localStorage.getItem("cartItems")).reduce((function(e,t){return e+t.quantity}),0);this.setState({cartSize:e})}},{key:"render",value:function(){var e=this,t=this.state.cartSize;return r.a.createElement(d.a,null,r.a.createElement(k,null,r.a.createElement(d.b,{to:"/",className:"navbar-brand"},"Online Store"),r.a.createElement(W,{cartSize:t})),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/checkout",render:function(t){return r.a.createElement(_,Object.assign({},t,{updateCartSize:e.updateCartSize}))}}),r.a.createElement(p.a,{path:"/shoppingCart",render:function(t){return r.a.createElement(w,Object.assign({},t,{updateCartSize:e.updateCartSize}))}}),r.a.createElement(p.a,{path:"/product/:id",render:function(t){return r.a.createElement(Q,Object.assign({},t,{updateCartSize:e.updateCartSize}))}}),r.a.createElement(p.a,{path:"/",render:function(){return r.a.createElement(I,{updateCartSize:e.updateCartSize})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.312acdf8.chunk.js.map