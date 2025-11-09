-- Create database
CREATE DATABASE constructora_xyz;

-- Use the database
\c constructora_xyz;

-- Projects table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL, -- 'edificaciones', 'casas', 'remodelaciones'
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(100),
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO projects (title, description, category, image_url) VALUES
('Edificio Corporativo ABC', 'Construcción de un edificio de 10 pisos para oficinas corporativas.', 'edificaciones', '/assets/images/edificio-abc.jpg'),
('Casa Familiar Moderna', 'Diseño y construcción de una casa de 3 habitaciones con jardín.', 'casas', '/assets/images/casa-moderna.jpg'),
('Remodelación de Cocina', 'Renovación completa de cocina en apartamento urbano.', 'remodelaciones', '/assets/images/remodelacion-cocina.jpg');

INSERT INTO blog_posts (title, content, author, image_url) VALUES
('Tendencias en Construcción Sostenible', 'La construcción sostenible está revolucionando la industria...', 'Juan Pérez', '/assets/images/blog-sostenible.jpg'),
('Diseño de Interiores Moderno', 'Explorando las últimas tendencias en diseño de interiores...', 'María García', '/assets/images/blog-interiores.jpg');