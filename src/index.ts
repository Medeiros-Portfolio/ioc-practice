import { register } from 'module';
import 'reflect-metadata'
import { container, inject, injectable, registry } from 'tsyringe';

const feature_toggle = {
  example_service: 'ExampleServiceA'
}

interface IExampleService {
    doSomething(): void
}

@registry([
  {token: 'ExampleServiceA', useClass: ExampleServiceA, },
])
class ExampleServiceA implements IExampleService {
    constructor() {
        console.log('ExampleService')
    }

    doSomething(){
        console.log('Doing something...')
    }
}

@registry([
  {token: 'ExampleServiceB', useClass: ExampleServiceB, },
])
class ExampleServiceB implements IExampleService {
    constructor() {
        console.log('ExampleServiceB')
    }

    doSomething(){
        console.log('Doing something a little different...')
    }
}

@injectable()
class ExampleBusiness {
  constructor(
    @inject('ExampleService')
    private exampleService: IExampleService
  ) {}

  callService() {
    this.exampleService.doSomething()
  }
}

container.register<IExampleService>('ExampleService', {
  useFactory: (container) => {
    return container.resolve<IExampleService>(feature_toggle.example_service)
  }
})

const example_business = container.resolve(ExampleBusiness)

example_business.callService()