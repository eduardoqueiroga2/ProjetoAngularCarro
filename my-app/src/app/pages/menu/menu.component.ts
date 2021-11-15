import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.items = [

            {
                label: 'BMW',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png',
                    modelo: '',
                    marca: 'BMW'
                },

                items: [
                    {
                        "label": "i8",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://loucosporcarro.com.br/wp-content/uploads/2019/08/bmw-i8.jpg",
                            "marca": "BMW",
                            "modelo": "i8",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    },
                    {
                        "label": "M4",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://mediapool.bmwgroup.com/cache/P9/202010/P90403620/P90403620-bmw-m4-competition-x-kith-10-2020-2002px.jpg",
                            "marca": "BMW",
                            "modelo": "M4",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    },
                    {
                        "label": "X1",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.motor1.com/images/mgl/9oVkX/s1/bmw-x1-25-anos.jpg",
                            "marca": "BMW",
                            "modelo": "X1",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    },
                    {
                        "label": "X6",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.hojeemdia.com.br/polopoly_fs/1.841577!/image/image.jpg_gen/derivatives/landscape_653/image.jpg",
                            "marca": "BMW",
                            "modelo": "X6",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    },
                    {
                        "label": "Z4 Roadster",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://s2.glbimg.com/-Ec41F4ldxxnDzFVWYYonit6dy0=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/W/3/gsiSARSIGahzd6u9YMyA/2019-08-19-1.png",
                            "marca": "BMW",
                            "modelo": "Z4 Roadster",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    },
                    {
                        "label": "Série 1",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://1.bp.blogspot.com/-pIV-dfMbmjs/YHSowuc6lAI/AAAAAAAAt0Y/I08M8hHiGuM8QrRoZ_ch3PyyyVjA34X_QCLcBGAsYHQ/s2048/BMW-Dark-edition%2B%25289%2529.jpg",
                            "marca": "BMW",
                            "modelo": "Série 1",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    },
                    {
                        "label": "Série 8",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://quatrorodas.abril.com.br/wp-content/uploads/2018/06/bmw-8-series_coupe-2019-1280-01.jpg",
                            "marca": "BMW",
                            "modelo": "Série 8",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    },
                    {
                        "label": "X4",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://revistacarro.com.br/wp-content/uploads/2021/06/BMW-X4-M40i_1.jpg",
                            "marca": "BMW",
                            "modelo": "X4",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    },
                    {
                        "label": "i30",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.autopapo.com.br/box/uploads/2017/06/14102222/I3-1.jpg",
                            "marca": "BMW",
                            "modelo": "i30",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    },
                    {
                        "label": "Serie 7",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://s2.glbimg.com/nz3cylH-xhdqCI5i_RlGx32RX2M=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/r/v/0r6ncjRx2RQNtco1EESw/2019-01-17-bmw-7-series-2020-1600-01.jpg",
                            "marca": "BMW",
                            "modelo": "Serie 7",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-1-1.png"
                        }
                    }
                ]
            },

            {
                label: 'Chevrolet',
                routerLink: 'marca',
                queryParams: {
                    url: '../assets/Chevrolet/Chevrolet-Logo.png',
                    modelo: '',
                    marca: 'Chevrolet'
                },
                items: [
                    {
                        label: 'Cruze',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-novo-cruze-6/colorizer/images-01/colorizer-branco-abalone.jpg?imwidth=960',
                            modelo: 'Cruze',
                            marca: 'Chevrolet',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                        }
                    },
                    {
                        label: 'Camaro',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/performance/2020-camaro/colorizer/colorizer-04.jpg?imwidth=960',
                            marca: 'Chevrolet',
                            modelo: 'Camaro',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'

                        }
                    },
                    {
                        label: 'Onix',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://www.alencauto.com.br/wp-content/uploads/2019/06/01-ONIX-JOY-1.0-FLEX-BRANCO.jpg',
                            marca: 'Chevrolet',
                            modelo: 'Onix',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                        }
                    },
                    {
                        label: 'Tracker',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/mov/13-images/colorizer-tracker-branco-summit.jpg?imwidth=960',
                            marca: 'Chevrolet',
                            modelo: 'Tracker',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                        }
                    },
                    {
                        label: 'Celta',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'http://itamarajunoticias.com.br/noticia/wp-content/uploads/2015/08/20140509131745129929i1.jpg',
                            marca: 'Chevrolet',
                            modelo: 'Celta',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                        }
                    },
                    {
                        label: 'S10 cabine dupla',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/pickups-and-trucks/s10-cabine-dupla/colorizer/01-images/colorizer-branco-summit.jpg?imwidth=960',
                            marca: 'Chevrolet',
                            modelo: 'S10 cabine dupla',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                        }
                    },
                    {
                        label: 'Cobalt',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://d2cmvxf0t9vz8m.cloudfront.net/images/carpage/cobalt.png',
                            marca: 'Chevrolet',
                            modelo: 'Cobalt',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                        }
                    },
                    {
                        label: 'Prisma',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://www.dezeroacem.com.br/wordpress/wp-content/uploads/2014/05/Chevrolet-Prisma-Brasil-2015-LT-LTZ-MyLink.jpg',
                            marca: 'Chevrolet',
                            modelo: 'Prisma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                        }
                    },
                    {
                        label: 'Spin',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'http://motosnovas.com.br/wp-content/uploads/2018/01/Nova-Spin-2019.jpg',
                            marca: 'Chevrolet',
                            modelo: 'Joy',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                        }
                    },
                    {
                        label: 'Joy Plus',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-joy-plus/colorizer/01-images/chevrolet-joy-plus-azul-blue-eyes.png?imwidth=420',
                            marca: 'Chevrolet',
                            modelo: 'Spin',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png'
                        }
                    },

                ]
            },

            {

                label: 'Fiat',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png',
                    modelo: '',
                    marca: 'Fiat'
                },
                items: [
                    {
                        label: 'Mobi',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/a4x/0/2022/page/profile-png/profile-249.png',
                            modelo: 'Mobi',
                            marca: 'Fiat',
                            imgMarca: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png'
                        }
                    },
                    {
                        label: 'Argo',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://http2.mlstatic.com/D_NQ_NP_967715-MLB29028314416_122018-O.jpg',
                            modelo: 'Argo',
                            marca: 'Fiat',
                            imgMarca: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png'
                        }
                    },
                    {
                        label: 'Uno',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://uno.fiat.com.br/content/dam/fiat/products/195/a4z/2/2021/page/360/806/00.jpg.thumb.1280.1280.png',
                            modelo: 'Uno',
                            marca: 'Fiat',
                            imgMarca: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png'
                        }
                    },
                    {
                        label: 'Cronos',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://cronos.fiat.com.br/static/folds/4/mobile/01-mt/00.png',
                            modelo: 'Cronos',
                            marca: 'Fiat',
                            imgMarca: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png'
                        }
                    },
                    {
                        label: 'Siena',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: '../assets/Fiat/Siena.png',
                            modelo: 'Siena',
                            marca: 'Fiat'
                        }
                    },
                    {
                        label: 'Palio',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://rentalteclocadora.com.br/wp-content/uploads/2018/08/palio.png',
                            modelo: 'Palio',
                            marca: 'Fiat'
                        }
                    },
                    {
                        label: 'Punto',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://www.encontracarros.com.br/upload/fiat/fiat-punto-t-jet.jpg',
                            modelo: 'Punto',
                            marca: 'Fiat'
                        }
                    },
                    {
                        label: 'Fiorino',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://destaquefiat.com.br/wp-content/uploads/2019/10/mini-fiorino.jpg',
                            modelo: 'Fiorino',
                            marca: 'Fiat'
                        }
                    },
                    {
                        label: 'Strada',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://3.bp.blogspot.com/-BukFFvpW4PQ/UX0N994MuqI/AAAAAAAA_no/J9zcdH835H8/s1600/Fiat+Strada+Cabine+Simples+(2).jpg',
                            modelo: 'Strada',
                            marca: 'Fiat'
                        }
                    },
                    {
                        label: 'Tempra',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/57ca0b6e0e21637197072accqr-654-gb-tempra-03-psd.jpeg?quality=70&strip=all&strip=all',
                            modelo: 'Tempra',
                            marca: 'Fiat'
                        }
                    },


                ]
            },

            {
                label: 'Ford',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png',
                    modelo: '',
                    marca: 'Ford'
                },

                items: [
                    {
                        "label": "Mustang",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202109/20210929/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem11210853768.jpg",
                            "marca": "Ford",
                            "modelo": "Mustang",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Territory",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2021/Territory/features/exterior-e-interior/Exterior/fbr-territory-ex-int-bg-hotspot-ext.jpg/_jcr_content/renditions/small.jpeg",
                            "marca": "Ford",
                            "modelo": "Territory",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Edge",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://revistacarro.com.br/wp-content/uploads/2019/08/Edge-7.jpg",
                            "marca": "Ford",
                            "modelo": "Edge",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Ka",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.autopapo.com.br/box/uploads/2018/11/22195928/img_2882.jpg",
                            "marca": "Ford",
                            "modelo": "Ka",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Ka Sedan",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.motor1.com/images/mgl/1l8Mp/s1/4x3/ford-ka-e-ka-sedan-2019.webp",
                            "marca": "Ford",
                            "modelo": "Ka Sedan",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Ranger Cabine Dupla",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://image1.mobiauto.com.br/images/api/images/v1.0/56632959/transform/fl_progressive,f_jpg,q_auto",
                            "marca": "Ford",
                            "modelo": "Ranger Cabine Dupla",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Fusion",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://quatrorodas.abril.com.br/wp-content/uploads/2018/03/19fordfusion_09_hr-e1596724047822.jpg?quality=70&strip=info",
                            "marca": "Ford",
                            "modelo": "Fusion",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Bronco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://motorshow.com.br/wp-content/uploads/sites/2/2021/04/ford-bronco-1.jpg",
                            "marca": "Ford",
                            "modelo": "Bronco",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Gt40",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://1.bp.blogspot.com/-mQZAy4MjNHk/WfnxCLWe-WI/AAAAAAAAD70/inUArcpezpwN2MI9qhIlbjIooMZDSM4VQCLcBGAs/s1600/130209817.jpg",
                            "marca": "Ford",
                            "modelo": "Gt40",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Gt90",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://drivetribe.imgix.net/OcHANM9NQWK4SPV3TEXOrQ",
                            "marca": "Ford",
                            "modelo": "Gt90",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    }
                ]
            },

            {
                label: 'Honda',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png',
                    modelo: '',
                    marca: 'Honda'
                },

                items: [
                    {
                        "label": "Civic",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Honda_Civic_coupe_%28facelift%29%2C_front_12.16.19.jpg",
                            "marca": "Honda",
                            "modelo": "Civic",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    },
                    {
                        "label": "City",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.comprecar.com.br/storage/news/featured/61869116-8705-4c6b-a1b7-98eef8f7fb01.jpeg",
                            "marca": "Honda",
                            "modelo": "City",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    },
                    {
                        "label": "CR-V",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/2018_Honda_CR-V_%28RW_MY18%29_%2BSport_2WD_wagon_%282018-10-22%29_01.jpg",
                            "marca": "Honda",
                            "modelo": "CR-V",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    },
                    {
                        "label": "HR-V",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://plazamotors.com.br/uploads/products/versions/colors/hrv-ex-cinza-barium-min.png",
                            "marca": "Honda",
                            "modelo": "HR-V",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    },
                    {
                        "label": "Fit",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://hondaforte.com.br/assets/images/0km/fit/2021/exl/foto001.jpg",
                            "marca": "Honda",
                            "modelo": "Fit",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    },
                    {
                        "label": "WR-V",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.autoo.com.br/fotos/2020/10/1280_960/honda_wr-v_2021_1_02102020_35189_1280_960.jpg",
                            "marca": "Honda",
                            "modelo": "WR-V",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    },
                    {
                        "label": "Accord",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://motorshow.com.br/wp-content/uploads/sites/2/2021/04/honda-accord-hibrido-13-1.jpg",
                            "marca": "Honda",
                            "modelo": "Accord",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    },
                    {
                        "label": "NSX",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://revistacarro.com.br/wp-content/uploads/2021/08/Honda-NSX-Type-S-2022_1.jpg",
                            "marca": "Honda",
                            "modelo": "NSX",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    },
                    {
                        "label": "Type R",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.noticiasautomotivas.com.br/img/f/Honda-Civic-Type-R-2020-2.jpg",
                            "marca": "Honda",
                            "modelo": "Type R",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    },
                    {
                        "label": "E",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://quatrorodas.abril.com.br/wp-content/uploads/2019/09/honda_strip_507517_1_full-e1567717265212.jpg?quality=70&strip=info",
                            "marca": "Honda",
                            "modelo": "E",
                            "imgMarca": "https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_960_720.png"
                        }
                    }
                ]
            },  

            {
                label: 'Hunday',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-0.png',
                    modelo: '',
                    marca: 'Hunday'
                },

                items: [
                    {
                        "label": "Creta",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3058050:1615376886/Hyundai-Creta.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=ddc53b6",
                            "marca": "Hunday",
                            "modelo": "Creta",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    },
                    {
                        "label": "Hb20",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://motorshow.com.br/wp-content/uploads/sites/2/2021/03/09_hb20_premium.jpg",
                            "marca": "Hunday",
                            "modelo": "Hb20",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    },
                    {
                        "label": "Tucson",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://1.bp.blogspot.com/--azoeksbaC0/X2CiGKx68HI/AAAAAAAAit8/vCK1HAUw7vMOYeEEJw7fVgrtikbRzJ2AACLcBGAsYHQ/s2048/Novo-Hyundai-Tucson-2022%2B%25282%2529.jpg",
                            "marca": "Hunday",
                            "modelo": "Tucson",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    },
                    {
                        "label": "Santa fe",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.motor1.com/images/mgl/NpNNM/s1/2021-hyundai-santa-fe.webp",
                            "marca": "Hunday",
                            "modelo": "Santa fe",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    },
                    {
                        "label": "Azera",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.motor1.com/images/mgl/kPOQe/s1/hyundai-azera-2020-brasil.jpg",
                            "marca": "Hunday",
                            "modelo": "Azera",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    },
                    {
                        "label": "Elantra",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://quatrorodas.abril.com.br/wp-content/uploads/2017/01/chr5632-e1579101977639.jpg?quality=70&strip=info",
                            "marca": "Hunday",
                            "modelo": "Elantra",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    },
                    {
                        "label": "Hb20S",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.hyundai.com.br/content/dam/hmb/cars/hb20s/2020/laterais/diamond/HB20S_2021_Diamond_CinzaSilk%40Full.png",
                            "marca": "Hunday",
                            "modelo": "Hb20S",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    },
                    {
                        "label": "Hb20X",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://image1.mobiauto.com.br/images/api/images/v1.0/51073646/transform/fl_progressive,f_jpg,q_auto",
                            "marca": "Hunday",
                            "modelo": "Hb20X",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    },
                    {
                        "label": "Ix 35",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://s2.glbimg.com/8jBehrgJVvA2bkgcMs1Qwo7tkw0=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/c/h/FzJ7o6TfWwFF4UMDrGWw/2017-01-27-fotoshyundai-91-copia.jpg",
                            "marca": "Hunday",
                            "modelo": "Ix 35",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    },
                    {
                        "label": "i30",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://s2.glbimg.com/B2ER4RNZhVeFxbwK2VzY0mbCBc8=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/q/a/pQxSPQSCquPXFAVd515g/2020-09-24-hyundai-i30-n-2021-1024-01.jpg",
                            "marca": "Hunday",
                            "modelo": "i30",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        }
                    }
                ]
            },  

            {
                label: 'Jeep',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logosmarcas.net/wp-content/uploads/2021/09/Jeep-Logo-650x366.png',
                    modelo: '',
                    marca: 'Jeep'
                },
            
                items: [
                    {
                        "label": "Renegade",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/07/Renegade_Moab_002-large-e1596229407148.jpeg?quality=70&strip=info",
                            "marca": "Jeep",
                            "modelo": "Renegade",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/09/Jeep-Logo-650x366.png"
                        }
                    },
                    {
                        "label": "Wrangler",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://revistacarro.com.br/wp-content/uploads/2021/01/Jeep-Wrangler-4xe_2.jpg",
                            "marca": "Jeep",
                            "modelo": "Wrangler",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/09/Jeep-Logo-650x366.png"
                        }
                    },
                    {
                        "label": "Compass",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://revistacarro.com.br/wp-content/uploads/2021/04/Jeep-Compass-Serie-S-2022_2.jpg",
                            "marca": "Jeep",
                            "modelo": "Compass",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/09/Jeep-Logo-650x366.png"
                        }
                    },
                    {
                        "label": "Grand Cherokee",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.motor1.com/images/mgl/epP9E/s3/jeep-grand-cherokee-rendering.jpg",
                            "marca": "Jeep",
                            "modelo": "Grand Cherokee",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/09/Jeep-Logo-650x366.png"
                        }
                    },
                    {
                        "label": "Comander",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://revistacarro.com.br/wp-content/uploads/2021/08/Jeep-Commander-Overland_1.jpg",
                            "marca": "Jeep",
                            "modelo": "Comander",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/09/Jeep-Logo-650x366.png"
                        }
                    }
                ]
            },
            
            {
                label: 'Nissan',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg',
                    modelo: '',
                    marca: 'Nissan'
                },
            
                items: [
                    {
                        "label": "Frontier",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/08/nissan-frontier-xe-9.jpg",
                            "marca": "Nissan ",
                            "modelo": "Frontier",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    },
                    {
                        "label": "GTR",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.nissan-cdn.net/content/dam/Nissan/br/vehicles/2016/gt-r/cores/tablet-1160-600/17TDI_GTRdp102.jpg.ximg.l_12_m.smart.jpg",
                            "marca": "Nissan ",
                            "modelo": "GTR",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    },
                    {
                        "label": "Kicks",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://quatrorodas.abril.com.br/wp-content/uploads/2020/12/CHR6095.psd-e1611268492656.jpg?quality=70&strip=info",
                            "marca": "Nissan ",
                            "modelo": "Kicks",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    },
                    {
                        "label": "Leaf",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.nissan-cdn.net/content/dam/Nissan/br/20210720/retoques_leaf/home/Nissan%20Leaf%20MY20%20FRENTE%203-4%20PRATA_1200x720.png.ximg.l_12_m.smart.png.ximg.l_12_m.smart.png",
                            "marca": "Nissan ",
                            "modelo": "Leaf",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    },
                    {
                        "label": "March",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://reviewauto.com.br/wp-content/uploads/2021/01/nissan-march.jpg",
                            "marca": "Nissan ",
                            "modelo": "March",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    },
                    {
                        "label": "Sentra",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202103/20210318/nissan-sentra-2.0-sv-16v-flexstart-4p-automatico-WMIMAGEM13165289330.jpg",
                            "marca": "Nissan ",
                            "modelo": "Sentra",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    },
                    {
                        "label": "Versa",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.nissan-cdn.net/content/dam/Nissan/br/20201027/VERSA_360_Advance_Prata%20Classic_2_Frente%20Motorista_CROP_300x238%20(1).png.ximg.l_12_m.smart.png",
                            "marca": "Nissan ",
                            "modelo": "Versa",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    },
                    {
                        "label": "Versa V-Drive",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.dezeroacem.com.br/wordpress/wp-content/uploads/2020/08/Nissan-Versa-V-Drive-Premium-CVT-2021-topo-de-linha.jpg",
                            "marca": "Nissan ",
                            "modelo": "Versa V-Drive",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    },
                    {
                        "label": "Livina",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "http://www.carangospb.com/wp-content/uploads/Modelos-fora-de-linha-da-Nissan-ganham-revis%C3%B5es-com-pre%C3%A7o-fixo-1.jpg",
                            "marca": "Nissan ",
                            "modelo": "Livina",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    },
                    {
                        "label": "Tiida",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "http://www.carangospb.com/wp-content/uploads/Modelos-fora-de-linha-da-Nissan-ganham-revis%C3%B5es-com-pre%C3%A7o-fixo-668x376.jpg",
                            "marca": "Nissan ",
                            "modelo": "Tiida",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/6/67/Nissan-logo.svg"
                        }
                    }
                ]
            },

            {
                label: 'Porsche',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logosmarcas.net/wp-content/uploads/2021/04/Porsche-Logo.png',
                    modelo: '',
                    marca: 'Porsche'
                },
            
                items: [
                    {
                        "label": "Cayenne",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-porsche-cayenne-coupe-115-1558530263.jpg?crop=1.00xw:0.753xh;0,0.114xh&resize=980:*",
                            "marca": "Porsche",
                            "modelo": "Cayenne",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Porsche-Logo.png"
                        }
                    },
                    {
                        "label": "911",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-porche-911-gts-47-1632250920.jpg?crop=0.843xw:0.712xh;0.159xw,0.185xh&resize=1200:*",
                            "marca": "Porsche",
                            "modelo": 911,
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Porsche-Logo.png"
                        }
                    },
                    {
                        "label": "Macan",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-porsche-macan-gts-475-hdr-1598445952.jpg?crop=0.609xw:0.519xh;0.0465xw,0.481xh&resize=1200:*",
                            "marca": "Porsche",
                            "modelo": "Macan",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Porsche-Logo.png"
                        }
                    },
                    {
                        "label": "Panamera",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/1024px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg",
                            "marca": "Porsche",
                            "modelo": "Panamera",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Porsche-Logo.png"
                        }
                    },
                    {
                        "label": "Taycan",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Porsche_Taycan_4S_IMG_3526.jpg/1280px-Porsche_Taycan_4S_IMG_3526.jpg",
                            "marca": "Porsche",
                            "modelo": "Taycan",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Porsche-Logo.png"
                        }
                    }
                ]
            },
          
            {
                label: 'Renault',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png',
                    modelo: '',
                    marca: 'Renault'
                },

                items: [
                    {
                        "label": "Zoe",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://upload.wikimedia.org/wikipedia/commons/c/c6/2018_Renault_ZOE.jpg",
                            "marca": "Renault",
                            "modelo": "Zoe",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    },
                    {
                        "label": "Sandero stepway",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://s2.glbimg.com/q-6rDK9ToZ27JiPrlJDyXoPFpzk=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/1/8/OWElOSTU2PjQ6spoZByw/2019-08-28-stepway-cvt-2020-006.jpg",
                            "marca": "Renault",
                            "modelo": "Sandero stepway",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    },
                    {
                        "label": "Sandero ",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://s2.glbimg.com/F4toFeXkXB-BzzgyFjkBt-tQ7j4=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/1/O/cWkaHpT3Gh3f1blXCwBw/2015-03-05-renault-sandero-5.jpg",
                            "marca": "Renault",
                            "modelo": "Sandero ",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    },
                    {
                        "label": "Logan",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://s2.glbimg.com/3jEgi5S4WR82uYdG0F7N8a8lEvc=/0x0:2000x1125/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/S/I/5d1rLrRTC1nDpqjgDUPA/renault-taliant-2022-dianteira-estatica.jpeg",
                            "marca": "Renault",
                            "modelo": "Logan",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    },
                    {
                        "label": "Duster",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://s2.glbimg.com/mpv6Dk86Fs6-mIeUF00HkHfdEN8=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/B/l/9DRJgHT1SDPcSMmMIezg/2020-03-02-renault-duster-2021-5.jpg",
                            "marca": "Renault",
                            "modelo": "Duster",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    },
                    {
                        "label": "Duster Oroch",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://renault.itavema.com.br/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/d/u/duster_oroch_dynamique_2.0_16v_flex_manual_editado_01_02_.jpg",
                            "marca": "Renault",
                            "modelo": "Duster Oroch",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    },
                    {
                        "label": "Captur",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://mundodoautomovelparapcd.com.br/wp-content/uploads/2018/04/Renault-Captur-Life-%E2%80%93-Vers%C3%A3o-exclusiva-PCD-02-1280x720.jpg",
                            "marca": "Renault",
                            "modelo": "Captur",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    },
                    {
                        "label": "Master",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.divelp.com.br/wp-content/uploads/2021/02/Renault-Master-Furgao-conheca-a-historia-de-um-dos-utilitarios-mais-vendidos-no-Brasil.jpg",
                            "marca": "Renault",
                            "modelo": "Master",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    },
                    {
                        "label": "Master Chassi",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://destaquerenault.com.br/wp-content/uploads/2019/10/mini-master-chassi.jpg",
                            "marca": "Renault",
                            "modelo": "Master Chassi",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    },
                    {
                        "label": "Kango",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.autoo.com.br/fotos/2018/4/960_720/renault_kangoo_2019_1_09042018_9285_960_720.jpg",
                            "marca": "Renault",
                            "modelo": "Kango",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2021/04/Renault-Logo.png"
                        }
                    }
                ]
            },

            {
                label: 'VolksWagen',
                routerLink: 'marca',
                queryParams: {
                    url: '../assets/VolksWagen/logo.jpg',
                    modelo: '',
                    marca: 'VolksWagen'
                },
            
                items: [
                    {
                        "label": "Saveiro",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://s2.glbimg.com/AnFT3Ce7EvTfvEtOXhjHwsu7OtU=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/P/t/tWAzidTByLpzONeEZLuw/2015-01-31-saveiro-surf-2.jpg",
                            "marca": "VolksWagen",
                            "modelo": "Saveiro",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    },
                    {
                        "label": "Gol",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://img1.icarros.com/dbimg/galeriaimgmodelo/8/134955_1.jpg",
                            "marca": "VolksWagen",
                            "modelo": "Gol",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    },
                    {
                        "label": "Fox",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://conteudo.imguol.com.br/c/entretenimento/e0/2021/02/17/volkswagen-fox-16-connect-1613578152704_v2_450x337.jpg",
                            "marca": "VolksWagen",
                            "modelo": "Fox",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    },
                    {
                        "label": "Golf",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://1.bp.blogspot.com/-qXfutktrmU0/XbHiI3VLuTI/AAAAAAAAYhY/dzNnU1f5EZoS4yi-Ng3aEBSlsZsiE2CQgCLcBGAsYHQ/s1600/VW-Golf-8-2020%2B%252814%2529.jpg",
                            "marca": "VolksWagen",
                            "modelo": "Golf",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    },
                    {
                        "label": "Polo",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202110/20211013/volkswagen-polo-1.0-200-tsi-highline-automatico-wmimagem10253536670.jpg",
                            "marca": "VolksWagen",
                            "modelo": "Polo",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    },
                    {
                        "label": "Up",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://2.bp.blogspot.com/-tsHXdW5eP-A/UvKQihzZ5YI/AAAAAAAA4P4/OatkxRSF4RI/s1600/up!+(2).jpg",
                            "marca": "VolksWagen",
                            "modelo": "Up",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    },
                    {
                        "label": "Virtus",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.noticiasautomotivas.com.br/img/f/volkswagen-virtus-highline-2022-1-1200x675.jpeg",
                            "marca": "VolksWagen",
                            "modelo": "Virtus",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    },
                    {
                        "label": "Amarok",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://quatrorodas.abril.com.br/wp-content/uploads/2019/12/volkswagen-amarok-highline-2020-4.jpg?quality=70&strip=info",
                            "marca": "VolksWagen",
                            "modelo": "Amarok",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    },
                    {
                        "label": "Jetta",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.autoo.com.br/fotos/2021/7/1280_960/Jetta1_16072021_49669_1280_960.jpg",
                            "marca": "VolksWagen",
                            "modelo": "Jetta",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    },
                    {
                        "label": "Voyage",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://motorshow.com.br/wp-content/uploads/sites/2/2018/10/13_ms420_volkswagen-voyage1-747x420.jpg",
                            "marca": "VolksWagen",
                            "modelo": "Voyage",
                            "imgMarca": "../assets/VolksWagen/logo.jpg"
                        }
                    }
                ]
            }
        ]
    }
}

