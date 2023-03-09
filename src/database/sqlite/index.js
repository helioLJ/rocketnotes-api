const sqlite3 = require("sqlite3") // driver do sqlite
const sqlite = require("sqlite") // sqlite
const path = require("path") // lib nativa do node para diretório

async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  })

  return database
}

module.exports = sqliteConnection