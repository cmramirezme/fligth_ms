export const usuarioTypeDef = `
  type Usuario {
      email: String!
      nombre: String!
      apellido: String!
      direccion: String!
      clave: String!
      telefono: String!
      birthday: String!
      rol: String!

  }
  input UsuarioInput {
      email: String!
      nombre: String!
      apellido: String!
      direccion: String!
      clave: String!
      telefono: String!
      birthday: String!
      rol: String!
  }`;

export const usuarioQueries = `
      allUsers: [Usuario]!
      usuarioByNombre(nombre: String!): Usuario!
  `;

export const usuarioMutations = `
    createUsuario(usuario: UsuarioInput!): Usuario!
    updateUsuario(email: String!, usuario: UsuarioInput!): Usuario!
    deleteUsuario(email: String!): String
`;

    //arrive_time:DateTime!
    //departure_time:DateTime!

    //flight_departure_time:DateTime!
    //flight_arrival_time:DateTime!
export const flightTypeDef = `
  type Flight_Escala{
    airport_name:String!
  }

  type Flight_Airport{
    airport_name:String!
  }

  type Flight {
    airport_origin:Flight_Airport!
    airport_destination:Flight_Airport!
    
    flight_airline:String!
    flight_seat_class:String!
    flight_escalas:[Flight_Escala]
    flight_available_seats:Int!
    flight_ticket_price:Float!

  }

  type CountryCreatedResponse{
    country_name:String
    message:String
  }

  input FlightSetCountry {
    country_name:String!
  }
  input getFlight {
      origin:String!
      destination:String!
  }`;
  export const flightQueries = `
      FlightByOrigDest(origin:String!,destination:String!): [Flight]
  `;
  export const countryMutations = `
    createCountry(country_name: FlightSetCountry!): CountryCreatedResponse!
`;