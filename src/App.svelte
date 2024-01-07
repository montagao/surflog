<script>
    import MainLayout from "./MainLayout.svelte";
    import DailyLog from "./DailyLog.svelte";

    let logs = [
        {
            date: "January 5th, 2024 (morning)",
            location: "Wushi Port of Yilan County, Taiwan (宜蘭頭城烏石港)",
            waveImage: "./01-05-2024.jpg",
            vibeImage: "./01-05-2024-vibe.JPG",
            notes: "<p>Caught two nice green waves today, just catching, standing up, and going straight (mostly). It was an amazing rush. Got stuck with the feeling of 'just one more wave,' not unlike in Dota or heartfelt sex. Audibly yelled 'Wooo' and got a head turn and nod of approval from an uncle surfing.</p> <p>Caught another one after that... the longest/nicest one yet! I could be faster on the popup next time, but it was exhilarating to stand on the board, move, and keep my balance with the water.</p> <p>Enjoyed the feeling of being in the lineup, watching others, and learning where to be and when to paddle. Luckily, the waves were not too frequent, so paddling to the outside wasn’t terrible.</p> <p>I realized today that surfing is a sport of two extremes: a lot of waiting around and being at peace, sharply contrasted by brief periods of extreme, intense, hard work. Maybe I prefer to live my life that way?</p> <h3>Tips to Self</h3> <ul> <li>You can be patient - just like in life, there is always another wave to catch.</li> <li>Once you catch the wave, you still have some time to get up. Try to angle the nose down a bit when trying to catch a wave. Once speed is matched, have the final paddles to let gravity catch your board and give you forward momentum.</li> <li>Smiling while surfing helps (source? None, I made it up).</li></ul>",
        },
        {
            date: "January 6th, 2024 (morning)",
            location: "Honeymoon Bay, Taiwan (蜜月灣)",
            waveImage: "./01-06-2024.jpeg",
            vibeImage: "./01-06-2024-vibe.JPG",
            notes: "<div class='surf-notes'> <ul> <li>Surfing with friends is always more fun, especially when they give you that extra push to go for waves you otherwise wouldn’t.</li> <li>As part of surfer etiquette, you should paddle out in the direction someone is going if they’re catching a wave; just go the direction of their tail.</li> <li>Again, basic but key to remember: nosediving means you should either arch your back more (banana harder) or move back on your board.</li> </ul> <h3>Side Note: </h3> <p>I learned how to cartwheel today with the help of a new friend. It was fun. The main hurdle was getting over the fear of failing... like many other things in life.</p></div> ",
        },
        {
            date: "January 6th, 2024 (evening)",
            location: "Double Lions Beach, Taiwan (雙獅海灘)",
            waveImage: "./01-06-2024-2.jpg",
            vibeImage: "./01-06-2024-vibe2.jpeg",
            notes: "<ul> <li>Smaller waves in this session, probably due to lower swell energy? I was told anything <100kJ is small. </li><li>Wetsuit is key on cold days/in evenings below 16°C.</li> <li>Shortboard is a different beast (pictured above!) than longboards.</li> <li>Try to keep the nose of the board 1 inch above water.</li> <li>Practice just sitting on a shortboard.</li> </ul> <p><strong>Side Note:</strong><br> A very passionate/angry sounding Taiwanese man called me this morning speaking in pure Tai Yu, ending with “Ok?” and I was thoroughly confused. He repeated this for about 3 minutes. Then I asked who he was looking for, and he said 紅臉. Then I said I was Monta. He said sorry and hung up.</p> ",
        },
        // ... more logs
    ];

    const logsPerPage = 1;
    let totalLogs = logs.length;
    let currentPage = totalLogs - 1;
    let totalPages = Math.ceil(totalLogs / logsPerPage);

    $: paginatedLogs = logs.slice(
        currentPage * logsPerPage,
        (currentPage + 1) * logsPerPage
    );

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
    <button on:click={prevPage} disabled={currentPage === 0}>Prev.</button>
    <button on:click={nextPage} disabled={currentPage === totalPages - 1}
        >Next</button
    >
    <button on:click={lastPage} disabled={currentPage === totalPages - 1}
        >Last</button
    >

    {#each paginatedLogs as log}
        <DailyLog {log} />
    {/each}

    <button on:click={firstPage} disabled={currentPage === 0}>First</button>
    <button on:click={prevPage} disabled={currentPage === 0}>Prev.</button>
    <button on:click={nextPage} disabled={currentPage === totalPages - 1}
        >Next</button
    >
    <button on:click={lastPage} disabled={currentPage === totalPages - 1}
        >Last</button
    >
</MainLayout>

<style>
    button {
        margin: 2px;
        margin-bottom: 20px;
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
