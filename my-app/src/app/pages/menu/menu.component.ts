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
                    url: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png',                        
                            modelo:'',
                            marca:'Chevrolet'                
                },
                        
                        items: [
                            {
                                label: 'Cruze', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://http2.mlstatic.com/D_NQ_NP_985193-MLB31867303192_082019-O.webp',                        
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
                                    url: 'https://images.noticiasautomotivas.com.br/img/f/Chevrolet-Onix-2020-21.jpg',
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
                                    url: 'https://s2.glbimg.com/qRoFPDtTNAJ9yS28b2YdnthNXpg=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/l/ecjjRJQFqdA3FmfEhTew/2019-06-06-tracker-12.jpg',
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
                                    url: 'http://dicascarrosusados.com/wp-content/uploads/2013/06/Chevrolet-Celta-um-um-carro-pequeno.jpg',
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
                                    url: 'https://revistacarro.com.br/wp-content/uploads/2018/05/image.gen_11.png',
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
                                    url: 'https://s2.glbimg.com/_X5VrNK2CeJ_ae-pm93G0LOKHzs=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/s/M/yCsSmoRRA78vLONy29DQ/2015-10-09-chevrolet-prisma-advantage-01.jpg',
                                    marca:'Chevrolet', 
                                    modelo:'Onix',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }
                            },
                            {
                                label: 'Joy', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.webmotors.com.br/imagens/prod/348191/CHEVROLET_JOY_1.0_SPE4_FLEX_MANUAL_34819116202526357.png?s=fill&w=130&h=97&q=70&t=true)',
                                    marca:'Chevrolet', 
                                    modelo:'Joy',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                                }
                            },
                            {
                                label: 'Spin', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-spin/colorizer/2021-spin-cinza-satin-steel.png?imwidth=960',
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

