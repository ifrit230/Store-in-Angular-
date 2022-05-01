export interface Product{
id: number;
name: string;
price: number;
description: string;
categoryId: number;
stock: number;
}


/*en este programa vamos a hacer un firma para comunicacrnos 
con el backend y poder traer lo productos 

En estos tipos de datos el progama se encarga que cuadren el tipo 
de datos, es decir si debe enviar numero o string debe ser
ese tipo de dato especifico.

Ojo a esto, aquí agrego el tipo de datos que voy a recibir aquí lo manipulo en función de lo que 
necesite


*/