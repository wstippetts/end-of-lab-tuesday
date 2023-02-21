import { api } from "../services/AxiosService.js";
import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { logger } from "../utils/Logger.js";
class GiftsService {

  async getGifts() {
    const res = await api.get('gifts')
    logger.log('getting gifts!', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
    logger.log(AppState.gifts)

  }

}

export const giftsService = new GiftsService()