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
    class Menu
    {
        Rectangle GameButton;
        Texture2D GameButtonTexture;
        Rectangle OptionsButton;
        Texture2D OptionsButtonTexture;
        public Menu(GraphicsDevice g)
        {
            GameButton = new Rectangle(g.Viewport.TitleSafeArea.Center.X - 200, g.Viewport.TitleSafeArea.Center.Y + 100, 100, 50);
            OptionsButton = new Rectangle(g.Viewport.TitleSafeArea.Center.X + 100, g.Viewport.TitleSafeArea.Center.Y + 100, 100, 50);
        }
        public void LoadContent(ContentManager c)
        {
            GameButtonTexture = Game1.blank;
            OptionsButtonTexture = Game1.blank;
        }
        public void Update(GameTime gameTime)
        {
            if (GameButton.Contains(new Point(Mouse.GetState().X, Mouse.GetState().Y)) && Mouse.GetState().LeftButton == ButtonState.Pressed)
            {
                Game1.state = GameState.Game;
            }
            if (OptionsButton.Contains(new Point(Mouse.GetState().X, Mouse.GetState().Y)) && Mouse.GetState().LeftButton == ButtonState.Pressed)
            {
                Game1.state = GameState.Options;
            }
        }

        public void Draw(GameTime gameTime, SpriteBatch spriteBatch)
        {
            spriteBatch.Draw(GameButtonTexture, GameButton, Color.White);
            spriteBatch.DrawString(Game1.font1, "Game Setup", new Vector2(GameButton.Left, GameButton.Top), Color.Black);
            spriteBatch.Draw(OptionsButtonTexture, OptionsButton, Color.White);
            spriteBatch.DrawString(Game1.font1, "Game Options", new Vector2(OptionsButton.Left, OptionsButton.Top), Color.Black);
        }
    }
}
