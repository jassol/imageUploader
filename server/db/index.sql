CREATE TABLE [ IF NOT EXISTS ] imageuploader.images (
  ID INT PRIMARY KEY NOT NULL,
  imageUrl character varying(800) NOT NULL,
  -- userId HOW DO I MAKE THIS A FOREIGN KEY
  public BOOLEAN
)

CREATE TABLE [ IF NOT EXISTS ] imageuploader.users (
  ID
  email
  password
)
