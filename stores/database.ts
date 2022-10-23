import { defineStore } from "pinia";
import { IPassword } from "~~/interfaces";

interface DatabaseState {
  cards: IPassword[];
}

const state = (): DatabaseState => ({
  cards: [
    {
      id: "123asdasd12312",
      name: "Twitch",
      url: "twitch.tv",
      username: "hardrack",
      password: "123456",
      notes: "This is a note",
      isFav: false,
    },
    {
      id: "1234asdas43",
      name: "Overwatch",
      url: "blizzard.battle.net",
      username: "hardrack",
      password: "244466666",
      notes: "This is a note x2",
      isFav: false,
    },
  ],
});

const getters = {
  getPasswordCards: (state: DatabaseState) => state.cards,
};

const actions = {
  getPasswordCardById(id: string) {
    return this.cards.find((card: IPassword) => card.id === id);
  },
  addPasswordCard(body: IPassword) {
    this.cards.push(body);
  },
  updatePasswordCard(body: IPassword) {
    this.cards = this.cards.map((card: IPassword) => {
      if (card.id === body.id) {
        return { ...card, ...body };
      }
      return card;
    });
  },
  removePasswordCard(id: string) {
    this.cards = this.cards.filter((card: IPassword) => card.id !== id);
  },
};

export const useDatabaseStore = defineStore("database", {
  state,
  getters,
  actions,
  persist: true,
});
