import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-viewpizza',
  templateUrl: './viewpizza.component.html',
  styleUrl: './viewpizza.component.css'
})
export class ViewpizzaComponent {
  allproduct: any[] = [];
  isAdmin: boolean = false;
  constructor(private service: ProductService, private router: Router, private authServic: AuthService) {
    this.getAllProduct();
    this.isAdmin = this.authServic.isAdmin();
  }

  getAllProduct(): void {
    this.service.getAllProduct().pipe(take(1)).subscribe((res: any) => {
        this.allproduct = res;
        console.log("####",this.allproduct);
  
        //console.log('Products cat Name:', res.productCategory.productName);
      });
  }

  onDelete(product: any): void {
    this.service.deleteProductById(product?.pizzaId).subscribe((res: any) => {
      console.log('>>>>>>>>>>>>>>>>', res);

      alert('Product Deleted successfully');
      this.getAllProduct();
    });
  }

  onEdit(product: any): void {
    console.log('####', product?.pizzaId);
    this.router.navigate(['/addproduct'], {
      queryParams: { pid: product?.pizzaId },
    });
    console.log('update');
  }

  placeOrder(product: any) {
    alert('Order added successfully')
  }
}
