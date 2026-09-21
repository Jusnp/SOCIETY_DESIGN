/* =========================================================
   CONFIGURACIÓN
========================================================= */

const WHATSAPP_NUMBER = "573216860632";


/* =========================================================
   PRODUCTOS
========================================================= */

const products = [

    {
        id: 1,

        name: "Camiseta Society Orbit",

        category: "hombre",

        categoryLabel: "Hombre",

        price: "Consultar precio",

        front: "assets/img/camisa4.jpg",

        back: "assets/img/camisa1.jpg",

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    },


    {
        id: 2,

        name: "Camiseta Society Orbit Woman",

        category: "mujer",

        categoryLabel: "Mujer",

        price: "Consultar precio",

        front: "assets/img/CAMISA1MUJER.jpg",

        back: "assets/img/CAMISAMUJER2.jpg",

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    },


    {
        id: 3,

        name: "Short Society Black",

        category: "hombre",

        categoryLabel: "Hombre",

        price: "Consultar precio",

        front: "assets/img/camisa5.jpg",

        back: "assets/img/camisa6.jpg",

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    },


    {
        id: 4,

        name: "Camiseta Society Blue",

        category: "mujer",

        categoryLabel: "Mujer",

        price: "Consultar precio",

        front:
            "assets/img/camisaazulfrrnte1mujer.jpg",

        back:
            "assets/img/camisaazulatras1mujer.jpg",

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    },


    {
        id: 5,

        name: "Camiseta Society Graphic",

        category: "hombre",

        categoryLabel: "Hombre",

        price: "Consultar precio",

        front:
            "assets/img/camisa3.jpg",

        back:
            "assets/img/camisa2.jpg",

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    },


    {
        id: 6,

        name: "Camiseta Society Yellow",

        category: "mujer",

        categoryLabel: "Mujer",

        price: "Consultar precio",

        front:
            "assets/img/camisaamarillafrente2mujer.jpg",

        back:
            "assets/img/camisaatras2mujer.jpg",

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    },


    {
        id: 7,

        name: "Camiseta Society Beige",

        category: "mujer",

        categoryLabel: "Mujer",

        price: "Consultar precio",

        front:
            "assets/img/camisabeis3frentemujer (2).jpg",

        back:
            "assets/img/camisabeis3fatrasmujer.jpg",

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    },


    {
        id: 8,

        name: "Camiseta Society Minimal",

        category: "mujer",

        categoryLabel: "Mujer",

        price: "Consultar precio",

        front:
            "assets/img/camisablaca4frentemujer.jpg",

        back: null,

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    }

];


/* =========================================================
   ELEMENTOS HTML
========================================================= */

const grid =
    document.getElementById("productGrid");

const toast =
    document.getElementById("toast");

let toastTimer;


/* =========================================================
   ICONO WHATSAPP
========================================================= */

function whatsappIcon() {

    return `

    <svg
        viewBox="0 0 32 32"
        aria-hidden="true">

        <path
            d="M19.11 17.32c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.29.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.05 3.2C9.05 3.2 3.36 8.88 3.36 15.88c0 2.24.58 4.43 1.69 6.36L3.25 28.8l6.71-1.76a12.63 12.63 0 0 0 6.08 1.55h.01c7 0 12.69-5.69 12.69-12.69 0-3.39-1.32-6.58-3.72-8.97a12.61 12.61 0 0 0-8.97-3.72zm0 23.25h-.01c-1.89 0-3.75-.51-5.37-1.47l-.39-.23-3.98 1.04 1.06-3.88-.25-.4a10.52 10.52 0 0 1-1.62-5.62c0-5.82 4.74-10.55 10.56-10.55 2.82 0 5.47 1.1 7.46 3.09a10.48 10.48 0 0 1 3.09 7.47c0 5.82-4.74 10.55-10.55 10.55z">
        </path>

    </svg>

    `;

}


/* =========================================================
   CREAR PRODUCTO
========================================================= */

function productTemplate(product) {

    const hasBack =
        Boolean(product.back);


    const productCode =
        `SOC-${String(product.id).padStart(3, "0")}`;


    return `

    <article

        class="
            product-card
            reveal
            ${hasBack ? "has-back" : "single-image"}
        "

        data-category="${product.category}"

        data-product-id="${product.id}">


        <div

            class="product-image-wrap"

            ${hasBack
                ? `
                    role="button"
                    tabindex="0"
                    aria-label="Cambiar entre frente y atrás"
                  `
                : ""
            }>


            <span class="product-badge">

                ${product.categoryLabel}

            </span>


            ${hasBack
                ? `
                    <span class="image-hint">
                        Frente / Atrás
                    </span>
                  `
                : ""
            }


            <img

                class="product-image front"

                src="${product.front}"

                alt="${product.name} - vista frontal"

                loading="lazy">


            ${hasBack

                ? `

                    <img

                        class="product-image back"

                        src="${product.back}"

                        alt="${product.name} - vista trasera"

                        loading="lazy">

                  `

                : ""

            }

        </div>


        <div class="product-info">


            <div class="product-meta">


                <div>

                    <h3 class="product-name">

                        ${product.name}

                    </h3>


                    <p class="product-price">

                        ${product.price}

                    </p>

                </div>


                <span class="product-code">

                    ${productCode}

                </span>


            </div>


            <p class="size-label">

                Selecciona una talla

            </p>


            <div

                class="sizes"

                aria-label="Tallas disponibles">


                ${product.sizes

                    .map(

                        size => `

                        <button

                            type="button"

                            class="size-btn"

                            data-size="${size}"

                            aria-label="Talla ${size}">

                            ${size}

                        </button>

                    `

                    )

                    .join("")}


            </div>


            <button

                type="button"

                class="whatsapp-btn">

                ${whatsappIcon()}

                Consultar por WhatsApp

            </button>


        </div>

    </article>

    `;

}


/* =========================================================
   MOSTRAR PRODUCTOS
========================================================= */

function renderProducts() {

    grid.innerHTML =
        products
            .map(productTemplate)
            .join("");


    observeReveals();

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    clearTimeout(toastTimer);


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    toastTimer =
        setTimeout(

            () => {

                toast.classList.remove(
                    "show"
                );

            },

            2600

        );

}


/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

function observeReveals() {

    const observer =
        new IntersectionObserver(

            (entries, currentObserver) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");


                        currentObserver
                            .unobserve(
                                entry.target
                            );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    document
        .querySelectorAll(
            ".reveal:not(.visible)"
        )
        .forEach(

            element => {

                observer.observe(
                    element
                );

            }

        );

}


/* =========================================================
   GENERAR PRODUCTOS
========================================================= */

renderProducts();


/* =========================================================
   FILTROS
========================================================= */

document
    .querySelectorAll(
        ".filter-btn"
    )
    .forEach(

        button => {

            button.addEventListener(

                "click",

                () => {


                    document
                        .querySelectorAll(
                            ".filter-btn"
                        )
                        .forEach(

                            btn => {

                                btn.classList
                                    .remove(
                                        "active"
                                    );

                            }

                        );


                    button
                        .classList
                        .add(
                            "active"
                        );


                    const filter =
                        button.dataset.filter;


                    document
                        .querySelectorAll(
                            ".product-card"
                        )
                        .forEach(

                            card => {


                                const shouldShow =

                                    filter === "todos"

                                    ||

                                    card.dataset.category ===
                                    filter;


                                card.classList.toggle(

                                    "hide",

                                    !shouldShow

                                );

                            }

                        );

                }

            );

        }

    );


/* =========================================================
   CAMBIAR FOTO FRENTE / ATRÁS
========================================================= */

function toggleProductImage(
    imageWrap
) {

    const card =
        imageWrap.closest(
            ".product-card"
        );


    if (
        !card.classList.contains(
            "has-back"
        )
    ) {

        return;

    }


    card.classList.toggle(
        "show-back"
    );

}


/* =========================================================
   EVENTOS PRODUCTOS
========================================================= */

grid.addEventListener(

    "click",

    event => {


        /* FOTO */

        const imageWrap =
            event.target.closest(
                ".product-image-wrap"
            );


        if (

            imageWrap

            &&

            !event.target.closest(
                "button"
            )

        ) {

            toggleProductImage(
                imageWrap
            );

            return;

        }


        /* TALLAS */

        const sizeButton =
            event.target.closest(
                ".size-btn"
            );


        if (sizeButton) {


            const card =
                sizeButton.closest(
                    ".product-card"
                );


            card
                .querySelectorAll(
                    ".size-btn"
                )
                .forEach(

                    btn => {

                        btn.classList.remove(
                            "selected"
                        );

                    }

                );


            sizeButton.classList.add(
                "selected"
            );


            return;

        }


        /* WHATSAPP */

        const whatsappButton =
            event.target.closest(
                ".whatsapp-btn"
            );


        if (!whatsappButton) {

            return;

        }


        const card =
            whatsappButton.closest(
                ".product-card"
            );


        const product =
            products.find(

                item =>

                    item.id ===
                    Number(
                        card.dataset.productId
                    )

            );


        const selectedSize =
            card.querySelector(
                ".size-btn.selected"
            );


        if (!selectedSize) {


            showToast(

                "Selecciona una talla antes de consultar por WhatsApp."

            );


            const sizes =
                card.querySelector(
                    ".sizes"
                );


            if (
                typeof sizes.animate ===
                "function"
            ) {

                sizes.animate(

                    [

                        {
                            transform:
                                "translateX(0)"
                        },

                        {
                            transform:
                                "translateX(-5px)"
                        },

                        {
                            transform:
                                "translateX(5px)"
                        },

                        {
                            transform:
                                "translateX(0)"
                        }

                    ],

                    {
                        duration: 280
                    }

                );

            }


            return;

        }


        const code =

            `SOC-${String(product.id)
                .padStart(3, "0")}`;


        const message =

`Hola SOCIETY 👋

Estoy interesado(a) en esta prenda:

• Producto: ${product.name}
• Código: ${code}
• Talla: ${selectedSize.dataset.size}

¿Me confirmas precio y disponibilidad?`;


        const url =

            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        window.open(

            url,

            "_blank",

            "noopener,noreferrer"

        );

    }

);


/* =========================================================
   TECLADO FRENTE / ATRÁS
========================================================= */

grid.addEventListener(

    "keydown",

    event => {


        const imageWrap =
            event.target.closest(
                ".product-image-wrap"
            );


        if (!imageWrap) {

            return;

        }


        if (

            event.key !== "Enter"

            &&

            event.key !== " "

        ) {

            return;

        }


        event.preventDefault();


        toggleProductImage(
            imageWrap
        );

    }

);


/* =========================================================
   HEADER
========================================================= */

const header =
    document.querySelector(
        ".site-header"
    );


window.addEventListener(

    "scroll",

    () => {

        header.classList.toggle(

            "scrolled",

            window.scrollY > 20

        );

    },

    {
        passive: true
    }

);


/* =========================================================
   MENÚ CELULAR
========================================================= */

const menuToggle =
    document.querySelector(
        ".menu-toggle"
    );


const navLinks =
    document.querySelector(
        ".nav-links"
    );


menuToggle.addEventListener(

    "click",

    () => {


        const open =

            !navLinks.classList.contains(
                "open"
            );


        navLinks.classList.toggle(

            "open",

            open

        );


        menuToggle.classList.toggle(

            "open",

            open

        );


        menuToggle.setAttribute(

            "aria-expanded",

            String(open)

        );


        document.body.classList.toggle(

            "menu-open",

            open

        );

    }

);


/* =========================================================
   CERRAR MENÚ AL ENTRAR A UNA SECCIÓN
========================================================= */

navLinks
    .querySelectorAll("a")
    .forEach(

        link => {

            link.addEventListener(

                "click",

                () => {


                    navLinks.classList.remove(
                        "open"
                    );


                    menuToggle.classList.remove(
                        "open"
                    );


                    menuToggle.setAttribute(

                        "aria-expanded",

                        "false"

                    );


                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            );

        }

    );


/* =========================================================
   AÑO AUTOMÁTICO
========================================================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* =========================================================
   INICIAR ANIMACIONES
========================================================= */

observeReveals();