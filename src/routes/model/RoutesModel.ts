export interface Param {
  id: String,
  value: String
}

export interface RoutesModel {
  title: String;
  path: String;
  content: String | React.ReactNode;
  exact?: Boolean;
  hide?: Boolean;
  containParam?: Boolean;
  params?: Array<Param>;
}