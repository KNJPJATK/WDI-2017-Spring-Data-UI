'use strict';

describe('Service: TopicService', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var TopicService;
  beforeEach(inject(function (_TopicService_) {
    TopicService = _TopicService_;
  }));

  it('should do something', function () {
    expect(!!TopicService).toBe(true);
  });

});
