export async function getAllCategory(){

const categoriesRes = await fetch('https://fakestoreapi.com/products/categories');
return categoriesRes.json();
}


export async function getAllProducts(){
    const productsRes = await fetch('https://fakestoreapi.com/products');
    return productsRes.json();
    
}

export async function getSingleProduct(id:string){
    const singleProductRes = await fetch(`https://fakestoreapi.com/products/${id}`);
    return singleProductRes.json();
    
} 

export async function getProductsByCategory(category:string){
    const productsByCategoryRes = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return productsByCategoryRes.json();
}