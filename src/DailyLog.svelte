<script>
    export let log;
    import { marked } from "marked";
    import { onMount } from "svelte";
    let htmlContent;

    onMount(() => {
        htmlContent = marked.parse(log.notes);
    });

    $: console.log(log);
</script>

<article class="daily-log">
    <div class="log-header">
        <h2>{log.date}</h2>
    </div>
    <p><strong>Wave Conditions:</strong></p>
    <div>
        <img src="/{log.waveImage}" alt="Wave conditions" class="wave-image" />
        <p><strong>Vibe:</strong></p>
        <div>
            <img
                src="/{log.vibeImage}"
                alt="Vibe conditions"
                class="wave-image"
            />
        </div>
    </div>
    <p><strong>Location:</strong> {log.location}</p>
    <p class="notes"><strong>Notes:</strong> {@html log.notes}</p>
</article>

<style>
    .daily-log {
        background-color: #fff;
        border: 2px solid #000;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 2rem;
        max-width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }

    .log-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .notes {
        margin-top: 1rem;
        text-align: left;
    }

    .wave-image {
        max-width: 350px; /* Adjust the width automatically */
        height: auto; /* Fixed height to maintain aspect ratio */
        object-fit: cover; /* Cover the container without losing aspect ratio */
        flex-shrink: 0; /* Prevent image from shrinking */
        border-radius: 4px; /* Optional: for aesthetics */
    }

    @media (max-width: 600px) {
        .daily-log {
            padding: 0.5rem;
        }

        .log-header {
            flex-direction: column;
            align-items: flex-start;
        }

        .wave-image {
            width: 100%;
        }
    }

    h2 {
        font-size: 1.5rem;
        margin: 0;
        flex-grow: 1;
    }

    p {
        font-size: 1rem;
        margin: 0.25rem 0;
    }

    p strong {
        color: #000;
    }
</style>
