
/*
Задание взято из:
https://github.com/Nooder/javascript-in-depth/tree/main/033-Project-2-Pokemon-Downloader-CLI

    Requirements:

    - Create a CLI (Command Line App) to download Pokemon info
    - Use the Pokemon API (pokeapi.co) to fetch stats and pictures
    - Ask the user for a pokemon name to search information for
    - The user can choose to download any combination of:
        1. Stats (as a text file)
        2. Sprites (Up to 8 of the 2d sprite pictures for that pokemon)
        3. Artwork (The official artwork for that pokemon)
    - A new folder should be created with the pokemon's name
    - Stats should be saved in stats.txt
      (save all the main stats and their values)
    - Sprites should use the <sprite_name>.png and all 4-8 will be
      downloaded at once (Eg: front_default.png)
    - The pokemon's artwork should be saved as original-artwork.png
    - User should be asked if they want to search another pokemon
*/

import { input, confirm } from '@inquirer/prompts';
import fs from "fs/promises";

console.log(`======= POKEMON DOWNLOADER =======`);

async function launchPokemonDownloader() {
  try {
    let continueSearch = true;

    while (continueSearch) {
      const pokemonName = await input({ message: `Pokemon name:` });
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`${response.statusText}, status: ${response.status}`)
      }
      const pokemonData = await response.json();
      const artworkUrl = pokemonData.sprites.other["official-artwork"].front_default;
      await fs.mkdir(`./${pokemonName}/`, { recursive: true });

      let downloadOptions = await input({ message: `Pokemon info to download (e.g., stats, sprites, artwork):` });
      const options = downloadOptions.split(/[\s,]+/).map(option => option.toLowerCase());

      options.forEach(option => {
        if (option === 'artwork') {
          saveImage(artworkUrl, pokemonName);
        } else if (option === 'sprites') {
          saveSprites(pokemonData.sprites, pokemonName);
        } else if (option === 'stats') {
          saveStats(pokemonData.stats, pokemonName);
        }
      });

      continueSearch = await confirm({ message: `Would you like to search for another pokemon?` });
    }
  } catch (error) {
    console.error('Error fetching pokemon data: ', error.message);
  }
}

async function saveSprites(data, path = `.`) {
 
  try {
    const entries = Object.entries(data).filter(([, value]) => typeof value === 'string');
    const keys = entries.map(([key]) => key);
    const urls = entries.map(([, value]) => value);

    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const arrayBuffers =  await Promise.all(responses.map((response) => response.arrayBuffer()));
    const buffers = arrayBuffers.map((arrayBuffer) => Buffer.from(arrayBuffer));

    const writeFilePromises = buffers.map((buffer, index) => {
      const fileName = `${path}/${keys[index]}.png`;
      console.log(`Saved: ${fileName}`);
      return fs.writeFile(fileName, buffer);
    })
    
    await Promise.all(writeFilePromises);

  } catch (err) {
    console.error('Error fetching image:', err);
  }
}

async function saveStats(stats, path = `.`) {
  try {
    const statsData = stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join('\n');
    const fileName = `${path}/stats.txt`;
    await fs.writeFile(fileName, statsData);
    console.log(`Saved: ${fileName}`);
  } catch (err) {
    console.error('Error saving stats:', err);
  }
}

async function saveImage(url, path = `.`) {
  try {
    const response = await fetch(url);
    const buffer = Buffer.from(await response.arrayBuffer());
    const filename = `${path}/official-artwork.png`
    await fs.writeFile(filename, buffer);
    console.log(`Saved: ${path}`);
  } catch (err) {
    console.error('Error fetching image:', err);
  }
}


launchPokemonDownloader();


