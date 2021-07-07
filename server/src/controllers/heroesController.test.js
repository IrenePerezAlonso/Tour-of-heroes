const {
  getAll,
  getById,
  createOne,
  updateById,
  deleteById
} = require('./heroesController')();
const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');

describe('getAll', () => {
  test('should get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    Hero.find.mockResolvedValueOnce({ name: 'Hola' });
    // act
    await getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'Hola' });
  });
});

describe('getById', () => {
  test('should get a hero by id', async () => {
    // arrange
    const req = {
      params: {
        heroId: null
      }
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    // act
    Hero.findById.mockResolvedValueOnce('heroe');
    await getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith('heroe');
  });
  test('should get a error 404', async () => {
    // arrange
    const req = {
      params: {
        heroId: null
      }
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    // act
    Hero.findById.mockRejectedValueOnce(404);
    await getById(req, res);
    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('createOne', () => {
  test('should create a hero', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    const req = {
      body: null
    };
    // act
    await createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
  test('should call send', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    const req = {
      body: null
    };
    // act
    Hero.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });
    await createOne(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('should update a hero by id', async () => {
    // arrange
    const res = {
      send: jest.fn(),
      json: jest.fn()
    };
    const req = {
      params: {
        heroId: null
      },
      body: {}
    };
    // act
    Hero.findByIdAndUpdate.mockResolvedValueOnce();
    await updateById(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
  test('should send error', async () => {
    // arrange
    const res = {
      send: jest.fn(),
      json: jest.fn()
    };
    const req = {
      params: {
        heroId: null
      },
      body: {}
    };
    // act
    Hero.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('should delete a hero by id', async () => {
    // arrange
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    const req = {
      params: {
        heroId: null
      }
    };
    // act
    await deleteById(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
  test('should send error', async () => {
    // arrange
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    const req = {
      params: {
        heroId: null
      }
    };
    // act
    Hero.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
