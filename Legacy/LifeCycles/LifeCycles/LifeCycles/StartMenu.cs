using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Audio;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.GamerServices;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Microsoft.Xna.Framework.Media;

namespace LifeCycles
{
    class StartMenu
    {
        Rectangle StartButton;
        Texture2D StartButtonTexture;

        public StartMenu(GraphicsDevice g)
        {
            StartButton = new Rectangle(g.Viewport.Width/2 - 100, g.Viewport.Width/2 - 25, 200, 50);
        }
        public void LoadContent(ContentManager c)
        {
            StartButtonTexture = Game1.blank;
        }
        public void Update(GameTime gameTime)
        {
            if (StartButton.Contains(new Point(Mouse.GetState().X, Mouse.GetState().Y)) && Mouse.GetState().LeftButton == ButtonState.Pressed)
            {
                Game1.state = GameState.Menu;
            }
        }

        public void Draw(GameTime gameTime, SpriteBatch spriteBatch)
        {
            spriteBatch.Draw(StartButtonTexture, StartButton, Color.White);
            spriteBatch.DrawString(Game1.font1, "Start Game", new Vector2(StartButton.Left, StartButton.Top), Color.Black);
        }
    }
}
