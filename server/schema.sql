DROP DATABASE IF EXISTS productinfo;
CREATE DATABASE productinfo;

\c productinfo;

--PRODUCTS
CREATE TABLE "products" (
    "id" INT NOT NULL,
    "name" TEXT NOT NULL,
    "slogan" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "default_price" TEXT NOT NULL,
    PRIMARY KEY ("id")
);

--FEATURES
CREATE TABLE "features" (
    "id" INT NOT NULL,
    "product_id" INT NOT NULL references "products"(id),
    "feature" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    PRIMARY KEY ("id")
);

--STYLES
CREATE TABLE "styles" (
    "id" INT NOT NULL,
    "product_id" INT NOT NULL references "products"(id),
    "name" TEXT NOT NULL,
    "sale_price" TEXT NULL,
    "original_price" TEXT NOT NULL,
    "default_style" BOOLEAN NOT NULL,
    PRIMARY KEY ("id")
);

--PHOTOS
CREATE TABLE "photos" (
  "id" INT NOT NULL,
  "style_id" INT NOT NULL references "styles"(id),
  "url" TEXT NOT NULL,
  "thumbnail_url" TEXT NOT NULL,
  PRIMARY KEY ("id")
);

--SKUS
CREATE TABLE "skus" (
  "id" INT NOT NULL,
  "style_id" INT NOT NULL references "styles"(id),
  "size" TEXT NOT NULL,
  "quantity" INT NOT NULL,
  PRIMARY KEY ("id")
);

--RELATED
CREATE TABLE "related" (
  "id" INT NOT NULL,
  "product_id" INT NOT NULL references "products"(id),
  "related_product_id" INT NOT NULL,
  PRIMARY KEY ("id")
);

COPY products ("id", "name", "slogan", "description", "category", "default_price")
FROM '/Users/mario/Downloads/product.csv' DELIMITER ','
CSV HEADER;

COPY features ("id", "product_id", "feature", "value")
FROM '/Users/mario/Downloads/features.csv' DELIMITER ','
CSV HEADER;

COPY styles ("id", "product_id", "name", "sale_price", "original_price", "default_style")
FROM '/Users/mario/Downloads/styles.csv' DELIMITER ','
CSV HEADER;

COPY photos ("id", "style_id", "url", "thumbnail_url")
FROM '/Users/mario/Downloads/photos.csv' DELIMITER ','
CSV HEADER;

COPY skus("id", "style_id", "size","quantity")
FROM '/Users/mario/Downloads/skus.csv' DELIMITER ','
CSV HEADER;

COPY related ("id", "product_id", "related_product_id")
FROM '/Users/mario/Downloads/related.csv' DELIMITER ','
CSV HEADER;