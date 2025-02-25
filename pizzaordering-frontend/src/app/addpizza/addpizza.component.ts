import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-addpizza',
  templateUrl: './addpizza.component.html',
  styleUrl: './addpizza.component.css'
})
export class AddpizzaComponent implements OnInit {
  name: string = '';
  price: any = '';
  category: string = '';

  pImage: any = '';
  isEdit: boolean = false;
  errorMessage: string = '';
  pizzaId: any = '';
  catgoryList: Array<Category> = [];
  categoryId: number = 0;

  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getCategoryList();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activatedRoute.queryParams.subscribe((res: any) => {
        console.log('>>>>>>>>', res);
        if (res && res?.pid) {
          this.isEdit = true;
          this.getProductById(res?.pid);
        }
      });
    }, 1000);

  }

  getCategoryList(): void {
    this.service
      .getCategoryList()
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res && Array.isArray(res)) {
          this.catgoryList = res;
        }
      });
  }

  getProductById(id: any): void {
    this.service
      .getProductById(id)
      .pipe(take(1))
      .subscribe((res) => {
        if (res && res?.pizzaId) {
          this.categoryId = res?.category?.cId;
          this.pizzaId = res?.pizzaId;
          this.name = res?.name;
          this.category = res?.category;
          this.pImage = res?.pImage;
          this.price = res?.price;
        }
      });
  }
  addUpdateProudcut(): any {
    if (this.name === '') {
      // this.errorMessage = 'Pizza name should not be blank';
      alert("please add Pizza Name");
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    if (this.price === '') {
      // this.errorMessage = 'Product Price should not be blank';
      alert("please add Price");
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    if (this.pImage === '') {
      // this.errorMessage = 'Product Image URL should not be blank';
      alert("please add image");
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }


    
    const pCategory = this.catgoryList.find((item: Category) => item.cId === parseInt(this.categoryId.toString()));
    const body: any = {
      name: this.name,
      price: this.price,
      category: pCategory,
      pImage: this.pImage,
    };
    if (!this.isEdit) {
      this.service
        .addProduct(body)
        .pipe(take(1))
        .subscribe((res: any) => {
          if (res && res?.pizzaId) {
            alert('Product Added successfully');
            this.service.navigateToLink('listproduct');
          }
        });
    } else {
      body.pizzaId = this.pizzaId;
      this.service.updateProduct(body).subscribe((res: any) => {
        console.log('##res#####', res);
        if (res && res?.pizzaId) {
          alert('Product Updated successfully');
          this.service.navigateToLink('listproduct');
        }
      });
    }
  }

}