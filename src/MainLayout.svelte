<script>
    // MainLayout script logic (if any)
</script>

<header>
    <h1><a href="https://monta.foo">monta's</a> surf log 🏄</h1>
</header>

<main>
    <slot />
</main>

<style>
    :global(body) {
        margin: 0;
        font-family: "Helvetica Neue", Arial, sans-serif;
        background-color: #fff;
        color: #333;
    }

    header {
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 1rem;
    }

    main {
        padding-top: 1rem;
    }

    footer {
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    h1 {
        margin: 0;
        font-size: 2.5rem;
    }

    p {
        margin: 0;
    }
</style>
