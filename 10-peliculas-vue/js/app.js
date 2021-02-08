const app = Vue.createApp({
    data() {
        return {
            title: "Movies Vue",
            movieData: {},
            movieTitle: "Spider Man"
        }
    },
    mounted() {
        this.getMovie();
    },
    methods: {
        async getMovie() {
            const search = this.movieTitle
                .toLowerCase()
                .replace(/ /g, "+");

            console.log(search);

            const data = await fetch(`https://www.omdbapi.com/?apikey=cb7e2bec&t=${search}`);

            const jsonData = await data.json();

            this.movieData = jsonData;

            console.log(jsonData);
        }
    }
});