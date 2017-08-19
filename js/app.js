import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

new Vue({
    el: '#nav',
    data: {
        itens: [
            { texto: 'item 1' },
            { texto: 'item 2' },
            { texto: 'item 3' }
        ]
    }
});

new Vue({
    el: '#conteudo',
    data: {
        itens: [
            { texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sollicitudin leo, sed blandit odio. Donec volutpat nunc vel luctus vestibulum. Aenean nec mauris tempus, mattis elit in, interdum dui. Nam ante elit, rutrum nec leo at, gravida laoreet leo. Nullam id condimentum urna.' },
            { texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sollicitudin leo, sed blandit odio. Donec volutpat nunc vel luctus vestibulum. Aenean nec mauris tempus, mattis elit in, interdum dui. Nam ante elit, rutrum nec leo at, gravida laoreet leo. Nullam id condimentum urna.' }
        ]
    }
});