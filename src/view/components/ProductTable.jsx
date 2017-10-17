/*import React from 'react';
 import ProductRow from './ProductRow';


 export default class ProductTable extends React.Component {
 constructor(props) {
 super(props);
 }

 render() {
 const rows = [];

 this.props.products.forEach((product) => {
 rows.push(
 <ProductRow
 product={product}
 key={product.name}/>
 );
 });

 return (
 <table>
 <thead>
 <tr>
 <th>Product image</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>{rows}</tbody>
 </table>
 );
 }
 }