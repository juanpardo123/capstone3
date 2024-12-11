create table if not exists seasons (
    id bigint auto_increment primary key,
    name varchar(10) not null,
    sequence integer not null
);

create table if not exists tasks (
  id bigint auto_increment primary key,
  name varchar(80) not null,
  description varchar(256) not null,
  image_url varchar(128) not null,
  frequency varchar(80) not null,
  preferred boolean default false,
  completed boolean default false
);

create table if not exists season_tasks (
  season_id bigint not null,
  task_id bigint not null,

  constraint pk_season_tasks primary key (season_id, task_id),
  constraint fk_season_tasks_seasons foreign key (season_id) references seasons (id),
  constraint fk_season_tasks_tasks foreign key (task_id) references tasks (id)
);

create table if not exists steps (
  id bigint auto_increment primary key,
  sequence integer not null,
  name varchar(80) not null,
  description varchar(256) not null,
  image_url varchar(512) not null,
  task_id bigint not null,

  constraint fk_steps_tasks foreign key (task_id) references tasks (id)
);


create table if not exists users (
  id bigint auto_increment primary key,
  username varchar(30) not null,
  name varchar(30) not null,
  password varchar(256) not null,
  email varchar(256) not null
);


insert into tasks (name, description, image_url, frequency,season, preferred, completed) values
  ('Clean the gutters', 'Make your own description here', 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-clean-gutters-step-2.jpg', 'weekly','winter', false, false),
  ('Christmas decorations', 'Make your own description here2', 'null', 'seasonal','winter', false, true),
  ('Repot your flowers', 'Make your own description here3', 'null', 'seasonal','spring', true, false);


insert into steps (sequence, name, description, image_url, task_id) values
  (1, 'Grab a ladder', 'make a better one', 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-clean-gutters-step-1.jpg', (select id from tasks where name = 'Clean the gutters')),
  (2, 'Grab some gloves', 'make a better one', 'link', (select id from tasks where name = 'Clean the gutters')),
  (1, 'Get a tree', 'make a better one', 'link', (select id from tasks where name = 'Christmas decorations')),
  (1, 'Buy new pots', 'make a better one', 'null', (select id from tasks where name = 'Repot your flowers'));


insert into users (username, name, password, email) values
  ('Me','juan', 'pass123', 'michael@test.com');
