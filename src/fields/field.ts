export abstract class Field {

  static getFields(): Field[]{
    /*
      "/rest/api/3/field": {
        "operationId": "getFields",
        "parameters": []
      }
    */
    return [];
  }

  static createCustomField(name:string, searcherKey:string, type:string, description?:string): Field{
    /*
      "/rest/api/3/field": {
        "operationId": "createCustomField",
        "parameters": [],
        "requestBody": {
              "example": {
                "searcherKey": "com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher",
                "name": "New custom field",
                "description": "Custom field for picking groups",
                "type": "com.atlassian.jira.plugin.system.customfieldtypes:grouppicker"
              }
            }
          }
        }
    */
    return null;
  }

  static getFieldsPaginated(startAt?: number, maxResults?: number, type?:Field.Type[], fields?:Field[], query?:string, orderBy?:Field.OrderBy, expand?:string): Field[]{
    /*
      "/rest/api/3/field/search": {
        "operationId": "getFieldsPaginated",
        "parameters": [
          {
            "name": "startAt",
            "in": "query",
            "description": "The index of the first item to return in a page of results (page offset).",
            "schema": { "type": "integer", "format": "int64", "default": 0 }
          },
          {
            "name": "maxResults",
            "in": "query",
            "description": "The maximum number of items to return per page.",
            "schema": { "type": "integer", "format": "int32", "default": 50 }
          },
          {
            "name": "type",
            "in": "query",
            "description": "The type of fields to search.",
            "schema": {
              "type": "array",
              "items": { "type": "string", "enum": ["custom", "system"] }
            }
          },
          {
            "name": "id",
            "in": "query",
            "description": "The IDs of the custom fields to return or, where `query` is specified, filter.",
            "schema": {
              "uniqueItems": true,
              "type": "array",
              "items": { "type": "string" }
            }
          },
          {
            "name": "query",
            "in": "query",
            "description": "String used to perform a case-insensitive partial match with field names or descriptions.",
            "schema": { "type": "string" }
          },
          {
            "name": "orderBy",
            "in": "query",
            "description": "[Order](#ordering) the results by a field:\n\n *  `contextsCount` Sorts by the number of contexts related to a field.\n *  `lastUsed` Sorts by the date when the value of the field last changed.\n *  `name` Sorts by the field name.\n *  `screensCount` Sorts by the number of screens related to a field.",
            "schema": {
              "type": "string",
              "enum": [
                "contextsCount",
                "-contextsCount",
                "+contextsCount",
                "lastUsed",
                "-lastUsed",
                "+lastUsed",
                "name",
                "-name",
                "+name",
                "screensCount",
                "-screensCount",
                "+screensCount"
              ]
            }
          },
          {
            "name": "expand",
            "in": "query",
            "description": "Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `key` Returns the key for each field.\n *  `lastUsed` Returns the date when the value of the field last changed.\n *  `screensCount` Returns the number of screens related to a field.\n *  `contextsCount` Returns the number of contexts related to a field.\n *  `isLocked` Returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og).",
            "schema": { "type": "string" }
          }
        ]
      }
    */
    return [];
  }

  // "operationId": "getContextsForField"
  static getContextsForField(field: Field, isAnyIssueType?: boolean, isGlobalContext?: boolean, contexts?: Context[], startAt?: number, maxResults?: number): Context[]{
    /*
      "/rest/api/3/field/{fieldId}/context": {
        "operationId": "getContextsForField",
        "parameters": [
          {
            "name": "fieldId",
            "in": "path",
            "description": "The ID of the custom field.",
            "required": true,
            "schema": { "type": "string" }
          },
          {
            "name": "isAnyIssueType",
            "in": "query",
            "description": "Whether to return contexts that apply to all issue types.",
            "schema": { "type": "boolean" }
          },
          {
            "name": "isGlobalContext",
            "in": "query",
            "description": "Whether to return contexts that apply to all projects.",
            "schema": { "type": "boolean" }
          },
          {
            "name": "contextId",
            "in": "query",
            "description": "The list of context IDs. To include multiple contexts, separate IDs with ampersand: `contextId=10000&contextId=10001`.",
            "schema": {
              "uniqueItems": true,
              "type": "array",
              "items": { "type": "integer", "format": "int64" }
            }
          },
          {
            "name": "startAt",
            "in": "query",
            "description": "The index of the first item to return in a page of results (page offset).",
            "schema": { "type": "integer", "format": "int64", "default": 0 }
          },
          {
            "name": "maxResults",
            "in": "query",
            "description": "The maximum number of items to return per page.",
            "schema": { "type": "integer", "format": "int32", "default": 50 }
          }
        ]
      }
    */
    return [];
  }
}

export namespace Field {
  export enum Type {
    Custom = "custom",
    System = "system",
  }
  export enum OrderBy {
    ContextCount = "contextsCount",
    ContextCountDescending = "-contextsCount",
    ContextCountAscending = "+contextsCount",
    LastUsed = "lastUsed",
    LastUsedDescending = "-lastUsed",
    LastUsedAscending = "+lastUsed",
    Name = "name",
    NameDescending = "-name",
    NameAscending = "+name",
    ScreenCount = "screensCount",
    ScreenCountDescending = "-screensCount",
    ScreenCountAscending = "+screensCount",
  }
}

export class Context {
  id: string;
  name: string;
  description: string;
  projects: any[];
  issueTypes: any[];
}
