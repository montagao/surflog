<script>
    import MainLayout from "./MainLayout.svelte";
    import DailyLog from "./DailyLog.svelte";
    import { Img } from "flowbite-svelte";

    let logs = [
        {
            date: "January 6th, 2024",
            location: "Wushi Port of Yilantou, Taiwan (宜蘭頭城烏石港)",
            waveImage: "./01-05-2024.jpg",
            vibeImage: "./01-05-2024-vibe.JPG",
            notes: " <p>Caught two nice green waves today, just catching, standing up and going straight (mostly). Amazing a rush. Got stuck with the feeling of “just one more wave” not unlike in dota or other addictive things like babymaking. Audibly yelled 'Woooo' and got a head turn and nod of approval from an uncle surfing.</p> <p>Caught another one after that… the longest/nicest one yet! I could be faster on the popup next time but it was exhilarating to be standing on the board and moving and keeping my balance with the water.</p> <p>Got the nice feeling of being in the lineup and watching others and learning where to be, when to paddle, etc. Luckily the waves were not too frequent so paddling to the outside wasn’t terrible.</p> <h3>Reflections</h3> <p>I realized today that surfing is a sport of two extremes: a lot of waiting around doing nothing sharply contrasted by brief periods of extreme intensity. Maybe I prefer to live my life in that way?</p> <h3>Notes</h3> <ul> <li>You can be patient - just like in life, there is always another wave to catch.</li> <li>Once you catch the wave, you still have some time to get up. Try to angle the nose down a bit when trying to catch a wave. Once speed is matched have the final paddles to let gravity catch your board and give you force forward</li> </ul>",
        },
        // ... more logs
        ,
    ];
    let currentPage = 0;
    const logsPerPage = 1;
    let totalLogs = logs.length;
    let totalPages = Math.ceil(totalLogs / logsPerPage);

    const getPaginatedLogs = () => {
        const start = currentPage * logsPerPage;
        const end = start + logsPerPage;
        return logs.slice(start, end);
    };

    const nextPage = () => {
        if (currentPage < totalPages - 1) currentPage++;
    };

    const prevPage = () => {
        if (currentPage > 0) currentPage--;
    };

    const firstPage = () => {
        currentPage = 0;
    };

    const lastPage = () => {
        currentPage = totalPages - 1;
    };
</script>

<MainLayout>
    <button on:click={firstPage} disabled={currentPage === 0}>First</button>
    <button on:click={prevPage} disabled={currentPage === 0}>Previous</button>
    <button on:click={nextPage} disabled={currentPage === totalPages - 1}
        >Next</button
    >
    <button on:click={lastPage} disabled={currentPage === totalPages - 1}
        >Last</button
    >

    {#each getPaginatedLogs() as log}
        <DailyLog {log} />
    {/each}

    <button on:click={firstPage} disabled={currentPage === 0}>First</button>
    <button on:click={prevPage} disabled={currentPage === 0}>Previous</button>
    <button on:click={nextPage} disabled={currentPage === totalPages - 1}
        >Next</button
    >
    <button on:click={lastPage} disabled={currentPage === totalPages - 1}
        >Last</button
    >
</MainLayout>

<style>
    button {
        margin: 10px;
        padding: 8px 15px;
        background-color: #000;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    button:hover:not(:disabled) {
        background-color: #0056b3;
    }
</style>
