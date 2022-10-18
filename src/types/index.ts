export interface IRepositoryInitialState {
  createdAt: string;
  issues: IIsue[];
  loading: boolean;
  error: boolean;
  repoOwner: string;
  repoName: string;
  repositoryId: string;
  filter: string[];
  sortField: string;
  sortDirection: string;
  currentUser: string;
}

export interface IIsueCard {
  node: {
    issue: Issue;
  };
}

export interface Issue {
  id: string;
  title: string;
  createdAt: string;
  closed: boolean;
  closedAt: string;
  updatedAt: string;
  number: number;
  comments: {
    totalCount: number;
  };
  author: {
    login: string;
    avatarUrl: string;
    url: string;
    resourcePath: string;
  };
  reactions: {
    edges: string[];
  };
}

export interface IIsue {
  node: {
    id: string;
    title: string;
    closed: boolean;
    updatedAt: string;
    closedAt: string;
    createdAt: string;
    comments: IComment[];
  };
}

export interface IComment {
  node: {
    author: IAuthor;
    body: string;
    bodyHTML: string;
    createdAt: string;
    id: string;
    // issue: IIsue[]
    issue: {
      id: string;
      title: string;
      url: string;
    };
    repository: IRepository;
    updatedAt: string;
    url: string;
    reactions: {
      edges: IReaction[];
    };
  };
}

export interface IAuthor {
  login: string;
  avatarUrl: string;
  url: string;
  resourcePath: string;
}

export interface IRepository {
  id: string;
  url: string;
  name: string;
}

export interface IReaction {
  node: {
    id: string;
    content: string;
    createdAt: string;
    user: IUser;
  };
}

export interface IUser {
  id: string;
  login: string;
  url: string;
}
