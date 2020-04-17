import {HTTP} from '../util/http.js'


class LikeModel extends HTTP {

    like(behavior, artId, category) {
        let url = behavior === 'like' ? '/like' : '/like/cancel'
        this.request({
            url: url,
            method: 'POST',
            data: {
                art_id: artId,
                type: category
            }
        })
    }

    getClassicLikeStatus(category, artID, sCallback) {
        let url = `/classic/${category}/${artID}/favor`
        this.request({
            url: url,
            method: 'GET',
            success: (res) => {
                sCallback(res)
            }
        })
    }
}

export {LikeModel}