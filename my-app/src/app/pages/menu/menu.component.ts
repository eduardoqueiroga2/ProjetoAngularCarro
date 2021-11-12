import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];   
  
    constructor( ) { }
  
    ngOnInit(): void {    
      
      this.items = [                
                {            
                label: 'Chevrolet',                
                routerLink: 'marca',
                queryParams: {                
                    url: '../assets/Chevrolet-Logo.png',                        
                            modelo:'',
                            marca:'Chevrolet'                
                },
                        
                        items: [
                            {
                                label: 'Cruze', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-novo-cruze-6/colorizer/images-01/colorizer-branco-abalone.jpg?imwidth=960',                    
                                    modelo:'Cruze',
                                    marca:'Chevrolet',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }         
                            },
                            {
                                label: 'Camaro', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/performance/2020-camaro/colorizer/colorizer-04.jpg?imwidth=960',
                                    marca:'Chevrolet', 
                                    modelo:'Camaro',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'

                                }         
                            },
                            {
                                label: 'Onix', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.alencauto.com.br/wp-content/uploads/2019/06/01-ONIX-JOY-1.0-FLEX-BRANCO.jpg',
                                    marca:'Chevrolet', 
                                    modelo:'Onix',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'                                    
                                }
                            },
                            {
                                label: 'Tracker', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/mov/13-images/colorizer-tracker-branco-summit.jpg?imwidth=960',
                                    marca:'Chevrolet', 
                                    modelo:'Tracker',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }
                            },
                            {
                                label: 'Celta', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'http://itamarajunoticias.com.br/noticia/wp-content/uploads/2015/08/20140509131745129929i1.jpg',
                                    marca:'Chevrolet', 
                                    modelo:'Celta',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }
                            },
                            {
                                label: 'S10 cabine dupla', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/pickups-and-trucks/s10-cabine-dupla/colorizer/01-images/colorizer-branco-summit.jpg?imwidth=960',
                                    marca:'Chevrolet', 
                                    modelo:'S10 cabine dupla',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }
                            },
                            {
                                label: 'Cobalt', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://d2cmvxf0t9vz8m.cloudfront.net/images/carpage/cobalt.png',
                                    marca:'Chevrolet', 
                                    modelo:'Cobalt',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }
                            },
                            {
                                label: 'Prisma', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.dezeroacem.com.br/wordpress/wp-content/uploads/2014/05/Chevrolet-Prisma-Brasil-2015-LT-LTZ-MyLink.jpg',
                                    marca:'Chevrolet', 
                                    modelo:'Onix',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }
                            },
                            {
                                label: 'Spin', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'http://motosnovas.com.br/wp-content/uploads/2018/01/Nova-Spin-2019.jpg',
                                    marca:'Chevrolet', 
                                    modelo:'Joy',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }
                            },
                            {
                                label: 'Joy Plus', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-joy-plus/colorizer/01-images/chevrolet-joy-plus-azul-blue-eyes.png?imwidth=420',
                                    marca:'Chevrolet', 
                                    modelo:'Spin',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }
                            },                                     
                            
                        ],
                },
                
                {
                
                    label: 'Fiat',
                    routerLink: 'marca',
                    queryParams: {                
                        url: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png',
                        marca:'Fiat',
                        modelo:''
                    },
                    
                    items: [
                        {
                            label: 'Mobi', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/a4x/0/2022/page/profile-png/profile-249.png',                        
                                modelo:'Mobi',
                                marca:'Fiat',
                                imgMarca: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png' 
                            }         
                        },
                        {
                            label: 'Argo', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'http://conteudo.imguol.com.br/c/entretenimento/7a/2019/12/07/fiat-argo-s-design-1575711512991_v2_16x9.jpg',                        
                                modelo:'Argo',
                                marca:'Fiat',
                                imgMarca: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png' 
                            }         
                        },
                        {
                            label: 'Uno', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://uno.fiat.com.br/content/dam/fiat/products/195/a4z/2/2021/page/360/806/00.jpg.thumb.1280.1280.png',                        
                                modelo:'Uno',
                                marca:'Fiat',
                                imgMarca: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png'
                            }         
                        },
                        {
                            label: 'Mobi', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/a4x/0/2022/page/profile-png/profile-249.png',                        
                                modelo:'Mobi',
                                marca:'Fiat',
                                imgMarca: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png' 
                            }         
                        },
                        {
                            label: 'Mobi', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/a4x/0/2022/page/profile-png/profile-249.png',                        
                                modelo:'Mobi',
                                marca:'Fiat'  
                            }         
                        },
                        {
                            label: 'Mobi', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/a4x/0/2022/page/profile-png/profile-249.png',                        
                                modelo:'Mobi',
                                marca:'Fiat'  
                            }         
                        },
                        {
                            label: 'Mobi', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/a4x/0/2022/page/profile-png/profile-249.png',                        
                                modelo:'Mobi',
                                marca:'Fiat'  
                            }         
                        },
                        {
                            label: 'Mobi', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/a4x/0/2022/page/profile-png/profile-249.png',                        
                                modelo:'Mobi',
                                marca:'Fiat'  
                            }         
                        },
                        {
                            label: 'Mobi', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/a4x/0/2022/page/profile-png/profile-249.png',                        
                                modelo:'Mobi',
                                marca:'Fiat'  
                            }         
                        },
                          {
                            label: 'Mobi', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/a4x/0/2022/page/profile-png/profile-249.png',                        
                                modelo:'Mobi',
                                marca:'Fiat'  
                            }         
                        },
                    
                        
                    ],
        
                    
                    
                },
           
        
        ]   
    }
}

