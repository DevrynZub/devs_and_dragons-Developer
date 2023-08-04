export class Campaign {
    constructor(data) {
        this.id = data.id
        this.coverImg = data.coverImg
        this.name = data.name
        this.desc = data.desc
        this.creatorId = data.creatorId
        this.isPrivate = data.isPrivate
        this.tags = data.tags
        this.capacity = data.capacity
        this.isArchived = data.isArchived
        this.nextSessionDate = new Date(data.nextSessionDate)
    }
}