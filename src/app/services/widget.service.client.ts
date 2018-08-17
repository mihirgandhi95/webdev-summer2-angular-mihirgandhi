export class WidgetServiceClient {

  findWidgetsForTopic(topicId) {
    return fetch('https://cs5610-summer2-2018-mihirg.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());

  }
}
